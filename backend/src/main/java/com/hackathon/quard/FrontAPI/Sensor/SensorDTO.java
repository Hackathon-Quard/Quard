package com.hackathon.quard.FrontAPI.Sensor;
import java.util.Date;


public class SensorDTO {

    private String sensorId;
    private String model;
    private String ipAddress;
    private int port;
    private String protocol;
    private String credentials;
    private String streamPath;
     private String connectionURL;
    private String sensorType;
    private String location;
    private Float currentReading;
    private Date readingTimestamp;
    private String status;
    private Date installationDate;
    private Integer machineId;

    public SensorDTO(){}

    public SensorDTO(String sensorId, String model, String ipAddress, int port, String protocol, String credentials, String streamPath, String connectionURL, String sensorType, String location, Float currentReading, Date readingTimestamp, String status, Date installationDate, Integer machineId) {
        this.sensorId = sensorId;
        this.model = model;
        this.ipAddress = ipAddress;
        this.port = port;
        this.protocol = protocol;
        this.credentials = credentials;
        this.streamPath = streamPath;
        this.connectionURL = connectionURL;
        this.sensorType = sensorType;
        this.location = location;
        this.currentReading = currentReading;
        this.readingTimestamp = readingTimestamp;
        this.status = status;
        this.installationDate = installationDate;
        this.machineId = machineId;
    }

    public String getSensorId() {
        return sensorId;
    }

    public void setSensorId(String sensorId) {
        this.sensorId = sensorId;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public String getCredentials() {
        return credentials;
    }

    public void setCredentials(String credentials) {
        this.credentials = credentials;
    }

    public String getStreamPath() {
        return streamPath;
    }

    public void setStreamPath(String streamPath) {
        this.streamPath = streamPath;
    }

        public String getConnectionURL() {
        return connectionURL;
    }

    public void setConnectionURL(String connectionURL) {
        this.connectionURL = connectionURL;
    }

    public String getSensorType() {
        return sensorType;
    }

    public void setSensorType(String sensorType) {
        this.sensorType = sensorType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Float getCurrentReading() {
        return currentReading;
    }

    public void setCurrentReading(Float currentReading) {
        this.currentReading = currentReading;
    }

    public Date getReadingTimestamp() {
        return readingTimestamp;
    }

    public void setReadingTimestamp(Date readingTimestamp) {
        this.readingTimestamp = readingTimestamp;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getInstallationDate() {
        return installationDate;
    }

    public void setInstallationDate(Date installationDate) {
        this.installationDate = installationDate;
    }

    public Integer getMachineId() {
        return machineId;
    }

    public void setMachineId(Integer machineId) {
        this.machineId = machineId;
    }
}