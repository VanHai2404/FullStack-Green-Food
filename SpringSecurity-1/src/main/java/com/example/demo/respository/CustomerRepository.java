package com.example.demo.respository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
  
}

