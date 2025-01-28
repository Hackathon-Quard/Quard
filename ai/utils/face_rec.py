import face_recognition
import os
import numpy as np

def get_face_embeddings(image_path):
    image = face_recognition.load_image_file(image_path)
    face_locations = face_recognition.face_locations(image) 
    if not face_locations:
        return None  
    face_encoding = face_recognition.face_encodings(image, face_locations) 
    if not face_encoding:
      return None
    return face_encoding[0] 

def recognize_face(test_embedding, known_face_encodings, known_face_names, threshold=0.6):
    if not known_face_encodings:
       return None
    face_distances = face_recognition.face_distance(known_face_encodings, test_embedding)
    best_match_index = np.argmin(face_distances)

    if face_distances[best_match_index] <= threshold:
        return known_face_names[best_match_index]
    else:
        return None  


known_face_encodings = []
known_face_names = []


base_dir = 'known_faces'
for filename in os.listdir(base_dir):
    if not filename.lower().endswith(('.jpg', '.jpeg', '.png')):
      continue
    name = os.path.splitext(filename)[0]
    image_path = os.path.join(base_dir, filename)
    embedding = get_face_embeddings(image_path)
    if embedding is None:
        print ("Warning: Could not detect a face in image", filename)
        continue
    known_face_encodings.append(embedding)
    known_face_names.append(name)


test_image_path = 'test_image.jpg'
test_embedding = get_face_embeddings(test_image_path)


if test_embedding is None:
    print ("Warning: Could not find a face in", test_image_path)
else:
   name = recognize_face(test_embedding, known_face_encodings, known_face_names)

   if name is not None:
      print(f"Recognized as: {name}")
   else:
        print("Unknown face.")
