import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models
import math
import pandas as pd



def calculate_back_angle(keypoints):
    
    if len(keypoints) < 33:
       print ("Warning: Keypoint data was not the right length. Requires 33 keypoints.")
       return None
    
    left_shoulder = keypoints[11]
    right_shoulder = keypoints[12]
    left_hip = keypoints[23]
    right_hip = keypoints[24]
    
    shoulder_mid_x = (left_shoulder[0] + right_shoulder[0])/2
    shoulder_mid_y = (left_shoulder[1] + right_shoulder[1])/2
    
    hip_mid_x = (left_hip[0] + right_hip[0])/2
    hip_mid_y = (left_hip[1] + right_hip[1])/2
    dx = shoulder_mid_x - hip_mid_x
    dy = shoulder_mid_y - hip_mid_y
    
    return (180/math.pi) * math.atan2(dy,dx)

def calculate_hand_distance(keypoints):
  if len(keypoints) < 33:
    print ("Warning: Keypoint data was not the right length. Requires 33 keypoints.")
    return None
  left_wrist = keypoints[15]
  right_wrist = keypoints[16]
  
  dx = right_wrist[0] - left_wrist[0]
  dy = right_wrist[1] - left_wrist[1]
  distance = math.sqrt(dx**2 + dy**2)
  return distance

def extract_features(keypoint_sequence):
  back_angles = []
  hand_distances = []
  for keypoints in keypoint_sequence:
     back_angle = calculate_back_angle(keypoints)
     hand_distance = calculate_hand_distance(keypoints)
     if back_angle is None or hand_distance is None:
       continue
     back_angles.append(back_angle)
     hand_distances.append(hand_distance)
  
  if len(back_angles) > 0:
   avg_back_angle = np.mean(back_angles)
  else:
    avg_back_angle = 0
  if len(hand_distances) > 0:
    avg_hand_distance = np.mean(hand_distances)
  else:
    avg_hand_distance = 0
  return np.array([avg_back_angle, avg_hand_distance])


def create_lifting_model(input_dim=2, hidden_units=128):
    input_layer = layers.Input(shape=(input_dim,))
    dense_layer_1 = layers.Dense(units=hidden_units, activation='relu')(input_layer)
    output_layer = layers.Dense(units=1, activation='sigmoid')(dense_layer_1)
    model = models.Model(inputs=input_layer, outputs=output_layer)
    return model


num_keypoints = 33
input_dim = 2
time_steps = 10
num_samples = 200




X_train = []
y_train = np.random.randint(0, 2, size=num_samples).astype('float32')


for label in y_train:
  keypoint_sequence = np.random.rand(time_steps, num_keypoints, input_dim)
  if label == 1: 
    
      keypoint_sequence[:, 11:12, 0] = 150 
      keypoint_sequence[:, 23:24, 0] = 100 
  else:  
    
    keypoint_sequence[:, 11:12, 0] = 100 
    keypoint_sequence[:, 23:24, 0] = 90 
    keypoint_sequence[:, 15:16, 0] = 140 
    keypoint_sequence[:, 16:17, 0] = 160 
  features = extract_features(keypoint_sequence)
  X_train.append(features)
X_train = np.array(X_train).astype('float32') 


model = create_lifting_model()


model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])


history = model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)



model.save('lifting_model.h5')
print ("Entire model saved to lifting_model.h5")


model.save_weights('lifting_weights.h5')
print ("Model weights saved to lifting_weights.h5")


features = extract_features(keypoint_sequence)
test_sample = np.array(features).reshape(1,-1).astype('float32')
predictions = model.predict(test_sample)
print(f"Bad Lifting Prediction: {predictions}")


history_df = pd.DataFrame(history.history)
history_df.to_csv("training_history.csv", index=False)
print ("Training history saved to training_history.csv")
