import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models


def create_overreach_model(num_keypoints=33, input_dim=2, time_steps=10, hidden_units=128):
    input_layer = layers.Input(shape=(time_steps, num_keypoints * input_dim))
    lstm_layer = layers.LSTM(units=hidden_units, return_sequences=False)(input_layer)
    dense_layer_1 = layers.Dense(units=hidden_units, activation='relu')(lstm_layer)
    output_layer = layers.Dense(units=1, activation='sigmoid')(dense_layer_1)
    model = models.Model(inputs=input_layer, outputs=output_layer)
    return model


num_keypoints = 33
input_dim = 2
time_steps = 10
num_samples = 100
X_train = np.random.rand(num_samples, time_steps, num_keypoints * input_dim).astype('float32')
y_train = np.random.randint(0, 2, size=num_samples).astype('float32')


model = create_overreach_model()


model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])


history = model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)



model.save('overreach_model.h5') 
print ("Entire model saved to overreach_model.h5")


model.save_weights('overreach_weights.h5') 
print ("Model weights saved to overreach_weights.h5")


X_test = np.random.rand(1, time_steps, num_keypoints * input_dim).astype('float32')
predictions = model.predict(X_test)
print(f"Overreaching Prediction: {predictions}")


import pandas as pd
history_df = pd.DataFrame(history.history)
history_df.to_csv("training_history.csv", index=False)
print ("Training history saved to training_history.csv")
