package com.edu.shop.service;


import com.edu.shop.domain.Supplier;
import com.edu.shop.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierService {
    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Optional<Supplier> getSupplierById(Long supplierId) {
        return supplierRepository.findById(supplierId);
    }

    public Supplier createSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public Supplier updateSupplier(Long supplierId, Supplier updatedSupplier) {
        Optional<Supplier> existingSupplier = supplierRepository.findById(supplierId);
        if (existingSupplier.isPresent()) {
            updatedSupplier.setSupplierId(supplierId);
            return supplierRepository.save(updatedSupplier);
        }
        return null; // Hoặc ném một exception nếu không tìm thấy
    }

    public void deleteSupplier(Long supplierId) {
        supplierRepository.deleteById(supplierId);
    }
}