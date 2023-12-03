package com.edu.shop.service;

<<<<<<< HEAD
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.edu.shop.domain.Supplier;

public interface SupplierService {

	void deleteAll();

	Supplier getReferenceById(Long id);

	void delete(Supplier entity);

	Supplier getById(Long id);

	void deleteById(Long id);

	Supplier getOne(Long id);

	boolean existsById(Long id);

	Optional<Supplier> findById(Long id);

	List<Supplier> findAll();

	Page<Supplier> findAll(Pageable pageable);

	void flush();

	List<Supplier> findAll(Sort sort);

	<S extends Supplier> S save(S entity);

	Page<Supplier> findByNameContaining(String Name, Pageable pageable);

	List<Supplier> findByNameContaining(String Name);

}
=======

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
>>>>>>> 1101e70b304f5aa902018b75e8f7a535d2e764fc
