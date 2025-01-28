import cv2
import numpy as np
def crop_objects_opencv(image_path, boxes):
    img = cv2.imread(image_path)
    crops = []
    for box in boxes:
        x1, y1, x2, y2 = map(int, box)
        cropped_img = img[y1:y2, x1:x2]
        crops.append(cropped_img)
    return crops
