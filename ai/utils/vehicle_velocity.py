import cv2
import numpy as np
from deep_sort_realtime.deepsort_tracker import DeepSort


def get_centroid(bbox):
  x1, y1, x2, y2 = bbox
  centroid_x = (x1 + x2) / 2
  centroid_y = (y1 + y2) / 2
  return (centroid_x, centroid_y)


tracker = DeepSort(max_age=5)  


from ultralytics import YOLO
detector = YOLO("yolov8n.pt")


video_path = "example_video.mp4"
cap = cv2.VideoCapture(video_path)
frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = cap.get(cv2.CAP_PROP_FPS)



tracked_objects = {}

while cap.isOpened():
  success, frame = cap.read()
  if not success:
      break

  
  results = detector.predict(frame, verbose=False)
  detections = []
  for result in results:
    boxes = result.boxes
    for box in boxes:
      
      x1, y1, x2, y2 = map(int, box.xyxy[0])
      confidence = box.conf[0]
      label = box.cls
      
      if label == 0 or label == 2:
        detections.append(([x1,y1,x2,y2], confidence, int(label))) 

  
  tracks = tracker.update_tracks(detections, frame=frame)
  
  for track in tracks:
    if not track.is_confirmed():
        continue
    track_id = track.track_id
    ltrb = track.to_ltrb()
    bbox = ltrb
    
    centroid = get_centroid(bbox)
    current_time = cap.get(cv2.CAP_PROP_POS_MSEC) / 1000 

    
    if track_id not in tracked_objects:
        tracked_objects[track_id] = {'positions':[], 'times':[]}
    
    tracked_objects[track_id]['positions'].append(centroid)
    tracked_objects[track_id]['times'].append(current_time)
    
    cv2.rectangle(frame,(int(bbox[0]), int(bbox[1])),(int(bbox[2]), int(bbox[3])),(0,0,255), 2)
    cv2.putText(frame, f"ID: {track_id}",(int(bbox[0]), int(bbox[1] - 10)),0,0.75,(0,0,255),2)

    
    if len(tracked_objects[track_id]['positions']) > 1:
      pos1 = tracked_objects[track_id]['positions'][-2] 
      pos2 = tracked_objects[track_id]['positions'][-1] 

      time1 = tracked_objects[track_id]['times'][-2] 
      time2 = tracked_objects[track_id]['times'][-1] 

      delta_time = time2 - time1 
      delta_x = pos2[0] - pos1[0] 
      delta_y = pos2[1] - pos1[1] 
      pixel_distance = np.sqrt(delta_x**2 + delta_y**2)
      meters_per_pixel = 1 
      
      
      velocity_pixels = pixel_distance / delta_time
      
      
      
      
      velocity_meters_per_second = pixel_distance * meters_per_pixel / delta_time
      cv2.putText(frame, f"Vel: {velocity_meters_per_second:.2f} m/s", (int(bbox[0]), int(bbox[3] + 30)), 0, 0.75, (0, 0, 255), 2)
  
  cv2.imshow("Tracking", frame)
  if cv2.waitKey(1) == ord("q"):
     break

cap.release()
cv2.destroyAllWindows()
