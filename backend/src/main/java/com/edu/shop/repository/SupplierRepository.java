package com.edu.shop.repository;

import com.edu.shop.domain.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {

    // tạo mới/cập nhật thông tin nhà cung cấp
    Supplier save(Supplier supplier);

    // Xóa một nhà cung cấp dựa trên ID
    void deleteById(Long supplierId);
}