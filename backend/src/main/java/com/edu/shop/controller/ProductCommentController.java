package com.edu.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.shop.domain.ProductComment;
import com.edu.shop.service.ProductCommentService;

@RestController
@RequestMapping("/api/productComments")
public class ProductCommentController {

	@Autowired
	ProductCommentService productCommentService;
	
	 // Get all comments
    @GetMapping
    public List<ProductComment> getAllComments() {
        return productCommentService.findAll();
    }

    // Get a comment by ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductComment> getCommentById(@PathVariable Integer id) {
        return productCommentService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Add a new comment
    @PostMapping
    public ResponseEntity<ProductComment> addComment(@RequestBody ProductComment comment) {
        ProductComment savedComment = productCommentService.save(comment);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedComment);
    }

    // Update an existing comment
    @PutMapping("/{id}")
    public ResponseEntity<ProductComment> updateComment(@PathVariable Integer id, @RequestBody ProductComment updatedComment) {
        return productCommentService.findById(id)
                .map(existingComment -> {
                    existingComment.setDetail(updatedComment.getDetail());
                    existingComment.setStatus(updatedComment.getStatus());
                    existingComment.setImages(updatedComment.getImages());
                    // Update other properties as needed
                    ProductComment updated = productCommentService.save(existingComment);
                    return ResponseEntity.ok(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete a comment by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Integer id) {
        if (productCommentService.existsById(id)) {
            productCommentService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
