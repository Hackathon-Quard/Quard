package com.hackathon.quard.FrontAPI.Accident;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccidentRepository extends JpaRepository<Accident, Long> {
    
}

