package com.edu.shop.controller.admin;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.shop.domain.Product;
import com.edu.shop.domain.ProductComment;
import com.edu.shop.service.ProductCommentService;
import com.edu.shop.service.ProductService;

@RestController
@RequestMapping("/api/admin/product-comments")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductCommentRestController {
	   @Autowired
	    private ProductCommentService productCommentService;
	    @Autowired
	    ProductService productService;

	    // Get all product comments
	    @GetMapping
	    public ResponseEntity<List<ProductComment>> getAllProductComments() {
	        List<ProductComment> productComments = productCommentService.findAll();
	        return new ResponseEntity<>(productComments, HttpStatus.OK);
	    }

	    // Get product comments by status
	    @GetMapping("/by-status/{status}")
	    public ResponseEntity<List<ProductComment>> getProductCommentsByStatus(@PathVariable Boolean status) {
	        List<ProductComment> productComments = productCommentService.findByStatus(status);
	        return new ResponseEntity<>(productComments, HttpStatus.OK);
	    }

	    // Get product comments by product
	    @GetMapping("/{productId}")
	    public ResponseEntity<List<ProductComment>> getProductCommentsByProduct(@PathVariable Integer productId) {
	        Optional<Product> productOptional = productService.findById(productId);

	        if (productOptional.isPresent()) {
	            Product product = productOptional.get();
	            List<ProductComment> productComments = productCommentService.findByProduct(product);
	            return new ResponseEntity<>(productComments, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    // Add a new product comment
	    @PostMapping
	    public ResponseEntity<ProductComment> addProductComment(@RequestBody ProductComment productComment) {
	        ProductComment savedProductComment = productCommentService.save(productComment);
	        return new ResponseEntity<>(savedProductComment, HttpStatus.CREATED);
	    }

	    // Update an existing product comment
	    @PutMapping("/{commentId}")
	    public ResponseEntity<ProductComment> updateProductComment(
	            @PathVariable Integer commentId,
	            @RequestBody ProductComment productComment) {
	        // Ensure the commentId in the path matches the productComment's ID
	        if (!commentId.equals(productComment.getCommentId())) {
	            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	        }

	        ProductComment updatedProductComment = productCommentService.save(productComment);
	        return new ResponseEntity<>(updatedProductComment, HttpStatus.OK);
	    }

	    // Delete a product comment
	    @DeleteMapping("/{commentId}")
	    public ResponseEntity<Void> deleteProductComment(@PathVariable Integer commentId) {
	        productCommentService.deleteById(commentId);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }

}
