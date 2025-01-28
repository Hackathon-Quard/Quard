package com.hackathon.quard.FrontAPI.Accident;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccidentService {
    private final AccidentRepository accidentRepository;

    @Autowired
    public AccidentService(AccidentRepository accidentRepository) {
        this.accidentRepository = accidentRepository;
    }

    
}