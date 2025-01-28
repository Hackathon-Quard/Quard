package com.hackathon.quard.MQTT;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.eclipse.paho.client.mqttv3.MqttException;


@RestController
public class MqttController {

    @Autowired
    private MqttService mqttService;


    @GetMapping(value = "/trigger")
    public String trigger() throws MqttException {
      System.out.println("Triggering MQTT");
        return "Triggered";
    }
}