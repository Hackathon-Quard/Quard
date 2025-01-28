import cv2
import numpy as np
from deep_sort_realtime.deepsort_tracker import DeepSort


def get_centroid(bbox):
  x1, y1, x2, y2 = bbox
  centroid_x = (x1 + x2) / 2
  centroid_y = (y1 + y2) / 2
  return (centroid_x, centroid_y)


def calculate_distance(point1, point2):
  x1,y1 = point1
  x2,y2 = point2
  dx = x2 - x1
  dy = y2 - y1
  return np.sqrt(dx**2 + dy**2)


tracker = DeepSort(max_age=5)  


from ultralytics import YOLO
detector = YOLO("yolov8n.pt")


video_path = "example_video.mp4"
cap = cv2.VideoCapture(video_path)

frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))


threshold_close_distance = 200; 

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

  
  tracked_workers = []
  tracked_vehicles = []
  
  for track in tracks:
    if not track.is_confirmed():
      continue
    track_id = track.track_id
    ltrb = track.to_ltrb()
    bbox = ltrb
    
    centroid = get_centroid(bbox)
    
    if track.get_det_class() == 0: 
        tracked_workers.append( (track_id, centroid) )
    elif track.get_det_class() == 2: 
        tracked_vehicles.append( (track_id, centroid) )
    
    cv2.rectangle(frame,(int(bbox[0]), int(bbox[1])),(int(bbox[2]), int(bbox[3])),(0,0,255), 2)
    cv2.putText(frame, f"ID: {track_id}",(int(bbox[0]), int(bbox[1] - 10)),0,0.75,(0,0,255),2)

  
  
  closest_distance = float('inf')
  closest_worker_id = None
  closest_vehicle_id = None

  for worker_id, worker_centroid in tracked_workers:
      for vehicle_id, vehicle_centroid in tracked_vehicles:
         distance = calculate_distance(worker_centroid, vehicle_centroid)
         if distance < closest_distance:
             closest_distance = distance
             closest_worker_id = worker_id
             closest_vehicle_id = vehicle_id
  
  if closest_distance < threshold_close_distance:
    if closest_worker_id is not None and closest_vehicle_id is not None:
      cv2.putText(frame, f"Warning: Worker {closest_worker_id} and vehicle {closest_vehicle_id} are too close.", (20, 100), 0, 1, (0, 0, 255), 3)

  
  cv2.imshow("Tracking", frame)
  if cv2.waitKey(1) == ord("q"):
    break

cap.release()
cv2.destroyAllWindows()
