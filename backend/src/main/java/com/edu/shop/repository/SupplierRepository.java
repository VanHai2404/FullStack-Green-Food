package com.edu.shop.repository;

<<<<<<< HEAD
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.shop.domain.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
	List<Supplier> findByNameContaining(String Name);
	Page<Supplier> findByNameContaining(String Name, Pageable pageable);

}
=======
import com.edu.shop.domain.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {

    // tạo mới/cập nhật thông tin nhà cung cấp
    Supplier save(Supplier supplier);

    // Xóa một nhà cung cấp dựa trên ID
    void deleteById(Long supplierId);
}
>>>>>>> 1101e70b304f5aa902018b75e8f7a535d2e764fc
