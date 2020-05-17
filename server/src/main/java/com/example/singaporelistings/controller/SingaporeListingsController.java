package com.example.singaporelistings.controller;

import com.example.singaporelistings.model.SingaporeListings;
import com.example.singaporelistings.repository.SingaporeListingsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SingaporeListingsController {

    @Autowired
    SingaporeListingsRepository singaporeListingsRepository;

    @CrossOrigin
    @GetMapping("/singapore-listings")
    public List<SingaporeListings> getAllNotes() {
        return singaporeListingsRepository.findAll();
    }
}
