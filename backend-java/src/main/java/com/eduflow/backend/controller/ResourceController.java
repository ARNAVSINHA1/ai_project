package com.eduflow.backend.controller;

import com.eduflow.backend.model.LearningResource;
import com.eduflow.backend.repository.LearningResourceRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private final LearningResourceRepository repository;

    public ResourceController(LearningResourceRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<LearningResource> listResources() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LearningResource> getResource(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<LearningResource> createResource(@Valid @RequestBody LearningResource resource) {
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(resource));
    }

    @PutMapping("/{id}")
    public ResponseEntity<LearningResource> updateResource(
            @PathVariable Long id,
            @Valid @RequestBody LearningResource updatedResource
    ) {
        Optional<LearningResource> existing = repository.findById(id);
        if (existing.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        LearningResource resource = existing.get();
        resource.setTitle(updatedResource.getTitle());
        resource.setDescription(updatedResource.getDescription());
        resource.setCategory(updatedResource.getCategory());
        resource.setLevel(updatedResource.getLevel());
        resource.setUrl(updatedResource.getUrl());
        return ResponseEntity.ok(repository.save(resource));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResource(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
