package com.hackathon.quard.FrontAPI.Accident;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accidents")
public class AccidentController {
    private final AccidentService accidentService;

    public AccidentController(AccidentService accidentService) {
        this.accidentService = accidentService;
    }

    
}
