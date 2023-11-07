package com.edu.shop.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.edu.shop.domain.Supplier;
import com.edu.shop.service.SupplierService;

@RestController
@RequestMapping("/suppliers")
public class SupplierController {

    @Autowired
    private SupplierService supplierService; // Tạo một service để xử lý logic liên quan đến nhà cung cấp

    // Lấy thông tin của nhà cung cấp bằng ID
    @GetMapping("/{supplierId}")
    public Supplier getSupplier(@PathVariable Long supplierId) {
        Optional<Supplier> optionalSupplier = supplierService.getSupplierById(supplierId);
        return optionalSupplier.orElse(null);
    }

    // Tạo mới nhà cung cấp
    @PostMapping("/")
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        Supplier createdSupplier = supplierService.createSupplier(supplier);
        return createdSupplier;
    }

    // Cập nhật thông tin nhà cung cấp
    @PutMapping("/{supplierId}")
    public Supplier updateSupplier(@PathVariable Long supplierId, @RequestBody Supplier supplier) {
        Supplier updatedSupplier = supplierService.updateSupplier(supplierId, supplier);
        return updatedSupplier;
    }

    // Xóa nhà cung cấp
    @DeleteMapping("/{supplierId}")
    public void deleteSupplier(@PathVariable Long supplierId) {
        supplierService.deleteSupplier(supplierId);
    }
}