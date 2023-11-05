package com.edu.shop.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
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

import com.edu.shop.domain.Supplier;
import com.edu.shop.domain.Supplier;
import com.edu.shop.dto.SupplierDto;
import com.edu.shop.service.SupplierService;

@RestController
@RequestMapping("/api/supplieres")
public class SupplierController {
	@Autowired
	SupplierService supplierService;
	
	   @GetMapping
	    public ResponseEntity<List<Supplier>> getAllCategories() {
	        List<Supplier> categories = supplierService.findAll();
	        return ResponseEntity.ok(categories);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Supplier> getSupplierById(@PathVariable Long id) {
	        Supplier Supplier = supplierService.findById(id).orElse(null);
	        if (Supplier != null) {
	            return ResponseEntity.ok(Supplier);
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	        }
	    }

	    @PostMapping
	    public ResponseEntity<Supplier> createSupplier(@RequestBody SupplierDto SupplierDto) {
	        Supplier entity = new Supplier();
	        BeanUtils.copyProperties(SupplierDto, entity);
	        Supplier savedSupplier = supplierService.save(entity);
	        return ResponseEntity.status(HttpStatus.CREATED).body(savedSupplier);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<Supplier> updateSupplier(@PathVariable Long id, @RequestBody SupplierDto SupplierDto) {
	        if (supplierService.existsById(id)) {
	            SupplierDto.setSupplierId(id);
	            Supplier entity = new Supplier();
	            BeanUtils.copyProperties(SupplierDto, entity);
	            Supplier updatedSupplier = supplierService.save(entity);
	            return ResponseEntity.ok(updatedSupplier);
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	        }
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteSupplier(@PathVariable Long id) {
	        if (supplierService.existsById(id)) {
	            supplierService.deleteById(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	        }
	    }

}
