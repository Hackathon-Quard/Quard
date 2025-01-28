import pandas as pd
from sklearn.preprocessing import MinMaxScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
import torch
from torch.utils.data import Dataset, DataLoader

class SensorDataPreprocessor:
    def __init__(self, missing_value_strategy='median', numerical_range=(-1, 1)):
      self.imputer = SimpleImputer(strategy=missing_value_strategy)
      self.scaler = MinMaxScaler(feature_range=numerical_range)
      self.encoder = OneHotEncoder(handle_unknown='ignore', sparse_output=False)
      self.encoded_feature_names = None 
      self.fitted = False


    def fit(self, df):
      self.imputer.fit(df[['temperature', 'pressure']])
      self.scaler.fit(df[['temperature', 'pressure']])
      self.encoder.fit(df[['operational_status', 'error_code']])
      self.encoded_feature_names = self.encoder.get_feature_names_out(['operational_status', 'error_code'])
      self.fitted = True

    def transform(self, df):
      if not self.fitted:
          raise Exception("Must fit the data preprocessor before transforming")
      
      df[['temperature', 'pressure']] = self.imputer.transform(df[['temperature', 'pressure']])

      
      df[['temperature', 'pressure']] = self.scaler.transform(df[['temperature', 'pressure']])

      
      encoded_features = self.encoder.transform(df[['operational_status', 'error_code']])
      df_encoded = pd.DataFrame(encoded_features, columns=self.encoded_feature_names)

      
      df = df.join(df_encoded)
      return df
    def fit_transform(self, df):
      """Fit to data and then transform"""
      self.fit(df)
      return self.transform(df)


class SensorDataset(Dataset):
    def __init__(self, sensor_df):
      self.df = sensor_df

    def __len__(self):
        return len(self.df)

    def __getitem__(self, idx):
        return torch.tensor(self.df.iloc[idx,2:].values, dtype=torch.float32)


if __name__ == '__main__':
    
    data = {
        'timestamp': pd.to_datetime(['2024-01-26 10:00:00', '2024-01-26 10:00:10', '2024-01-26 10:00:20',
                                     '2024-01-26 10:00:30', '2024-01-26 10:00:40', '2024-01-26 10:00:50',
                                     '2024-01-26 10:01:00']),
        'machine_id': ['Conveyor A', 'Press B', 'Robot C', 'Conveyor A', 'Press B', 'Robot C', 'Conveyor A'],
        'temperature': [25, 30, 28, 26, np.nan, 31, 27],
        'pressure': [100, 120, 110, np.nan, 115, 125, 105],
        'operational_status': ['Running', 'Idle', 'Running', 'Running', 'Error', 'Idle', 'Running'],
        'accident': [0, 0, 0, 1, 0, 0, 0],
        'error_code': ['None', 'None', 'None', 'None', 'E101', 'None', 'None']
    }
    df = pd.DataFrame(data)

    
    preprocessor = SensorDataPreprocessor(missing_value_strategy='median', numerical_range=(-1, 1))

    
    df_preprocessed = preprocessor.fit_transform(df)

    
    print("Preprocessed Sensor Data:")
    print(df_preprocessed.head())
    print ("\n Shape of Preprocessed data: ", df_preprocessed.shape)


    
    sensor_dataset = SensorDataset(df_preprocessed)
    dataloader = DataLoader(sensor_dataset, batch_size=2) 
    print ("\n Example of Datasets:")

    for i, batch in enumerate(dataloader):
        print (f"\n Batch {i}:", batch)
        if i == 2:
           break 
