package com.hackathon.quard.FrontAPI.Camera;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Camera {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cameraType;
    private String name;
    private String ipAddress;
    private Integer port;
    private String protocol;
    private String credentials;
    private String streamPath;
    private String connectionURL;

    @Lob
    private byte[] videoData;

    private String videoFormat;

    @OneToOne
    private Long alert;

    
    

    public Long getId() {
        return id;
    }

    public byte[] getVideoData() {
        return videoData;
    }

    public void setVideoData(byte[] videoData) {
        this.videoData = videoData;
    }

    public String getConnectionURL() {
        return connectionURL;
    }

    public void setConnectionURL(String connectionURL) {
        this.connectionURL = connectionURL;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCameraType() {
        return cameraType;
    }

    public void setCameraType(String cameraType) {
        this.cameraType = cameraType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getCredentials() {
        return credentials;
    }

    public void setCredentials(String credentials) {
        this.credentials = credentials;
    }

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public Integer getPort() {
        return port;
    }

    public void setPort(Integer port) {
        this.port = port;
    }

    public String getVideoFormat() {
        return videoFormat;
    }

    public void setVideoFormat(String videoFormat) {
        this.videoFormat = videoFormat;
    }

    public Long getAlert() {
        return alert;
    }

    public void setAlert(Long alert) {
        this.alert = alert;
    }

    public String getStreamPath() {
        return streamPath;
    }

    public void setStreamPath(String streamPath) {
        this.streamPath = streamPath;
    }
}

