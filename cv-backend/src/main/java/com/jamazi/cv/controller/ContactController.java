package com.jamazi.cv.controller;

import com.jamazi.cv.model.ContactMessage;
import com.jamazi.cv.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> send(@Valid @RequestBody ContactMessage message) {
        service.save(message);
        return ResponseEntity.ok(Map.of("message", "Votre message a été envoyé avec succès !"));
    }

    @GetMapping
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(service.findAll());
    }
}
