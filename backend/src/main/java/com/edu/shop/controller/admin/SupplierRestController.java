package com.edu.shop.controller.admin;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.edu.shop.domain.Category;
import com.edu.shop.domain.Supplier;
import com.edu.shop.dto.CategoryDto;
import com.edu.shop.dto.SupplierDto;
import com.edu.shop.service.SupplierService;

@RestController
@RequestMapping("/api/admin/suppliers")
public class SupplierRestController {
	@Autowired
	SupplierService supplierService;

	@GetMapping
	public ResponseEntity<List<Supplier>> getAllSupplier() {
		List<Supplier> supList = supplierService.findAll();
		return ResponseEntity.ok(supList);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Supplier> getSupplierById(@PathVariable Long id) {
		Supplier supplier = supplierService.findById(id).orElse(null);
		if (supplier != null) {
			return ResponseEntity.ok(supplier);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}

	@PostMapping
	public ResponseEntity<Supplier> createSupplier(@RequestBody SupplierDto supplierDto) {
		Supplier entity = new Supplier();
		BeanUtils.copyProperties(supplierDto, entity);
		Supplier savedCategory = supplierService.save(entity);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedCategory);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Supplier> updateSupplier(@PathVariable Long id, @RequestBody SupplierDto dto) {

		if (supplierService.existsById(id)) {
			dto.setSupplierId(id);
			Supplier entity = new Supplier();
			BeanUtils.copyProperties(dto, entity);
			Supplier updatesupplier = supplierService.save(entity);
			return ResponseEntity.ok(updatesupplier);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> DeleteSupplier(@PathVariable Long id) {
		if (supplierService.existsById(id)) {
			supplierService.deleteById(id);
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}

}
