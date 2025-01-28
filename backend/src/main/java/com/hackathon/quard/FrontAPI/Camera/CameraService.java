package com.hackathon.quard.FrontAPI.Camera;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CameraService {
    private final CameraRepository cameraRepository;

    @Autowired
    public CameraService(CameraRepository cameraRepository) {
        this.cameraRepository = cameraRepository;
    }

    public List<CameraDTO> getAllCameras() {
        return cameraRepository.findAll().stream().map(camera -> {
            CameraDTO dto = new CameraDTO();
            dto.setId(camera.getId());
            dto.setName(camera.getName());
            dto.setIpAddress(camera.getIpAddress());
            dto.setPort(camera.getPort());
            return dto;
        }).toList();
    }

    public Camera saveCamera(Camera camera) {
        return cameraRepository.save(camera);
    }

    public void deleteCamera(Long id) {
        cameraRepository.deleteById(id);
    }
}
