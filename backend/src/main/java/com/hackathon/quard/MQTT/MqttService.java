package com.hackathon.quard.MQTT;

import org.eclipse.paho.client.mqttv3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import java.nio.charset.StandardCharsets;


@Service
public class MqttService {

    @Autowired
    private MqttConfig mqttConfig;

    private MqttClient mqttClient;

    @PostConstruct
    public void init() throws MqttException {
        MqttConnectOptions connectOptions = new MqttConnectOptions();
        if(mqttConfig.getUsername() != null && !mqttConfig.getUsername().isEmpty()) {
            connectOptions.setUserName(mqttConfig.getUsername());
            connectOptions.setPassword(mqttConfig.getPassword().toCharArray());
        }
        mqttClient = new MqttClient(mqttConfig.getBrokerUrl(), mqttConfig.getClientId());
        mqttClient.connect(connectOptions);
        mqttClient.subscribe(mqttConfig.getTopic(), (topic, msg) -> {
            handleMessage(msg);
        });
        System.out.println("MQTT connection initialized");
    }

    @PreDestroy
    public void shutdown() throws MqttException {
        mqttClient.disconnect();
        mqttClient.close();
        System.out.println("MQTT connection shutdown");
    }

    public void handleMessage(MqttMessage message)  {
        String payload = new String(message.getPayload(), StandardCharsets.UTF_8);
        System.out.println("Received message: " + payload);
        
        
    }
}