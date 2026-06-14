package com.jamazi.cv.service;

import com.jamazi.cv.model.ContactMessage;
import com.jamazi.cv.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    private final ContactRepository repository;

    public ContactService(ContactRepository repository) {
        this.repository = repository;
    }

    public ContactMessage save(ContactMessage message) {
        return repository.save(message);
    }

    public List<ContactMessage> findAll() {
        return repository.findAll();
    }
}
