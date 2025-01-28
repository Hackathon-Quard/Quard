package com.hackathon.quard.FrontAPI.AccidentEmployee;

import jakarta.persistence.*;

@Entity
public class AccidentEmployee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Long employee;

    @ManyToOne
    private Long accident;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getEmployee() {
        return employee;
    }

    public void setEmployee(Long employee) {
        this.employee = employee;
    }

    public Long getAccident() {
        return accident;
    }

    public void setAccident(Long accident) {
        this.accident = accident;
    }

    
}
