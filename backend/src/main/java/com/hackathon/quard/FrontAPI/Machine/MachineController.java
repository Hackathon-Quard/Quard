package com.hackathon.quard.FrontAPI.Machine;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/machines")
public class MachineController {
    private final MachineService machineService;

    public MachineController(MachineService machineService) {
        this.machineService = machineService;
    }

    
}