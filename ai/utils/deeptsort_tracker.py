import numpy as np
import cv2
from deep_sort_realtime.deepsort_tracker import DeepSort


tracker = DeepSort(max_age=5) 


from ultralytics import YOLO
detector = YOLO("yolov8n.pt")


video_path = "example_video.mp4"
cap = cv2.VideoCapture(video_path)

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
    
    cv2.rectangle(frame,(int(bbox[0]), int(bbox[1])),(int(bbox[2]), int(bbox[3])),(0,0,255), 2)
    cv2.putText(frame, f"ID: {track_id}",(int(bbox[0]), int(bbox[1] - 10)),0,0.75,(0,0,255),2)


    
    
  
  cv2.imshow("Tracking", frame)
  if cv2.waitKey(1) == ord("q"):
    break

cap.release()
cv2.destroyAllWindows()
