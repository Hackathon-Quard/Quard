import pandas as pd
from sklearn.preprocessing import MinMaxScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
from datetime import datetime

def preprocess_sensor_data(df):
    numeric_cols = ['current_reading', 'port', 'machineId']
    imputer_numeric = SimpleImputer(strategy='median')
    df[numeric_cols] = imputer_numeric.fit_transform(df[numeric_cols])

    
    categorical_cols = ['model', 'protocol', 'sensor_type', 'location', 'status']
    imputer_categorical = SimpleImputer(strategy='constant', fill_value='unknown')
    df[categorical_cols] = imputer_categorical.fit_transform(df[categorical_cols])

    
    df['reading_timestamp'] = pd.to_datetime(df['reading_timestamp'])
    df['installation_date'] = pd.to_datetime(df['installation_date'])

    df['reading_hour'] = df['reading_timestamp'].dt.hour
    df['reading_day_of_week'] = df['reading_timestamp'].dt.dayofweek 
    df['reading_month'] = df['reading_timestamp'].dt.month

    df['installation_year'] = df['installation_date'].dt.year
    df['time_since_installation_days'] = (df['reading_timestamp'] - df['installation_date']).dt.days

    
    numerical_features = ['current_reading', 'port', 'machineId', 'time_since_installation_days','reading_hour','reading_day_of_week','reading_month', 'installation_year']
    scaler = MinMaxScaler(feature_range=(-1, 1)) 
    df[numerical_features] = scaler.fit_transform(df[numerical_features])

    
    categorical_features = ['model', 'protocol', 'sensor_type', 'location', 'status']
    encoder = OneHotEncoder(handle_unknown='ignore', sparse_output=False) 
    encoded_features = encoder.fit_transform(df[categorical_features])

    
    encoded_feature_names = encoder.get_feature_names_out(categorical_features)

    
    df_encoded = pd.DataFrame(encoded_features, columns = encoded_feature_names)

    
    df = df.join(df_encoded)

    
    df.drop(columns=categorical_features, inplace=True)

    
    
    

    return df


if __name__ == '__main__':
    data = {
        'sensor_id': ['S101', 'S102', 'S103', 'S104', 'S105'],
        'model': ['TEMP-100', 'PRESS-200', 'MOTION-300', 'TEMP-100', 'MOTION-300'],
        'ipAddress': ['192.168.1.100', '192.168.1.101', '192.168.1.102', '192.168.1.100', '192.168.1.103'],
        'port': [8080, 8081, 8082, None, 8083],
        'protocol': ['HTTP', 'MQTT', 'HTTP', 'HTTP', 'MQTT'],
        'credentials': ['user1:pass1', None, 'user3:pass3', 'user1:pass1', None],
        'streamPath': ['/data/temp', '/data/pressure', '/data/motion', '/data/temp', '/data/motion'],
        'connectionURL': ['http://192.168.1.100:8080/data/temp', 'mqtt://192.168.1.101:8081',
                         'http://192.168.1.102:8082/data/motion', 'http://192.168.1.100:8080/data/temp',
                         'mqtt://192.168.1.103:8083'],
        'sensor_type': ['temperature', 'pressure', 'motion', 'temperature', 'motion'],
        'location': ['Zone A-1', 'Zone B-2', 'Zone C-3', 'Zone A-1', 'Zone C-3'],
        'current_reading': [25.5, 120.3, 1.2, 26.1, 0.8],
        'reading_timestamp': [datetime(2024, 1, 25, 10, 30, 0), datetime(2024, 1, 25, 10, 35, 0),
                             datetime(2024, 1, 25, 10, 40, 0), datetime(2024, 1, 25, 10, 45, 0),
                             datetime(2024, 1, 25, 10, 50, 0)],
        'status': ['active', 'active', 'offline', 'error', 'active'],
        'installation_date': [datetime(2023, 10, 1), datetime(2023, 10, 15), datetime(2023, 11, 1),
                             datetime(2023, 10, 1), datetime(2023, 11, 15)],
        'machineId': [1, 2, None, 1, 3]
    }
    df = pd.DataFrame(data)
    preprocessed_df = preprocess_sensor_data(df.copy())
    print(preprocessed_df.to_markdown())
