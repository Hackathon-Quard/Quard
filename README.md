71iq: @workspace write readme for this project

Workspace: Collecting workspace information

# Quard Project

This project is a comprehensive solution that integrates a backend built with Spring Boot and a frontend built with React, TypeScript, and Vite. It also includes AI models and quantum computing components.

## Project Structure

```
.vscode/
ai/
backend/
frontend/
quantum/
```

### Backend

The backend is a Spring Boot application that provides APIs for managing cameras, sensors, alerts, and employees.

#### Key Files

- 

QuardApplication.java

: Main application class.
- 

Camera.java

: Camera entity.
- 

Sensor.java

: Sensor entity.
- 

Alert.java

: Alert entity.
- 

Employee.java

: Employee entity.
- 

MqttService.java

: MQTT service for handling messages.
- 

pom.xml

: Maven configuration file.

### Frontend

The frontend is a React application using TypeScript and Vite. It includes various components and pages for managing the application.

#### Key Files

- 

App.tsx

: Main application component.
- 

Employees.tsx

: Employees page.
- 

label.tsx

: Label component.
- 

index.css

: Global CSS styles.
- 

package.json

: Project dependencies and scripts.
- 

tailwind.config.js

: Tailwind CSS configuration.

### AI

The AI directory contains pre-trained models for various actions.

#### Key Files

- 

action14_10.h5

: Pre-trained model for action 14.
- 

best.pt

: Best performing model.
- 

sensor_pre2.py

: Utility script for sensor data preprocessing.

### Quantum

The quantum directory contains Jupyter notebooks for quantum computing experiments.

#### Key Files

- 

QSVM.ipynb

: Quantum Support Vector Machine notebook.
- 

Quantum_Encoding.ipynb

: Quantum encoding experiments.
- 

Quantum_Simulation.ipynb

: Quantum simulation experiments.

## Getting Started

### Prerequisites

- Node.js
- Maven
- Java 17

### Backend Setup

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```

2. Build the project using Maven:
    ```sh
    ./mvnw clean install
    ```

3. Run the Spring Boot application:
    ```sh
    ./mvnw spring-boot:run
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

### AI Setup

1. Ensure you have Python installed.
2. Install required Python packages:
    ```sh
    pip install -r ai/requirements.txt
    ```

### Quantum Setup

1. Ensure you have Jupyter installed.
2. Start Jupyter Notebook:
    ```sh
    jupyter notebook
    ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.