package com.hackathon.quard.FrontAPI.Camera;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cameras")
public class CameraController {
    private final CameraService cameraService;

    @Autowired
    public CameraController(CameraService cameraService) {
        this.cameraService = cameraService;
    }

    @GetMapping
    public List<CameraDTO> getCameras() {
        return cameraService.getAllCameras();
    }

    @PostMapping
    public Camera createCamera(@RequestBody Camera camera) {
        return cameraService.saveCamera(camera);
    }

    @DeleteMapping("/{id}")
    public void deleteCamera(@PathVariable Long id) {
        cameraService.deleteCamera(id);
    }
}
