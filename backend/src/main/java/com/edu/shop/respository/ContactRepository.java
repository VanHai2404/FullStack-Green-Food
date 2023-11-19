package com.edu.shop.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.shop.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}