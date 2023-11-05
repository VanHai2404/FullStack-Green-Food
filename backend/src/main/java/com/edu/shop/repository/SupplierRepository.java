package com.edu.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.shop.domain.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long>{

}
