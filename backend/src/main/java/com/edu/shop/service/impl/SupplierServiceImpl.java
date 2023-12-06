package com.edu.shop.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.edu.shop.domain.Supplier;
import com.edu.shop.repository.SupplierRepository;
import com.edu.shop.service.SupplierService;
@Service
public class SupplierServiceImpl implements SupplierService {
	@Autowired
	SupplierRepository repository;

	@Override
	public List<Supplier> findByNameContaining(String Name) {
		return repository.findByNameContaining(Name);
	}

	@Override
	public Page<Supplier> findByNameContaining(String Name, Pageable pageable) {
		return repository.findByNameContaining(Name, pageable);
	}

	@Override
	public <S extends Supplier> S save(S entity) {
		return repository.save(entity);
	}

	@Override
	public List<Supplier> findAll(Sort sort) {
		return repository.findAll(sort);
	}

	@Override
	public void flush() {
		repository.flush();
	}

	@Override
	public Page<Supplier> findAll(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Override
	public List<Supplier> findAll() {
		return repository.findAll();
	}

	@Override
	public Optional<Supplier> findById(Long id) {
		return repository.findById(id);
	}

	@Override
	public boolean existsById(Long id) {
		return repository.existsById(id);
	}

	@Override
	public Supplier getOne(Long id) {
		return repository.getOne(id);
	}

	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);
	}

	@Override
	public Supplier getById(Long id) {
		return repository.getById(id);
	}

	@Override
	public void delete(Supplier entity) {
		repository.delete(entity);
	}

	@Override
	public Supplier getReferenceById(Long id) {
		return repository.getReferenceById(id);
	}

	@Override
	public void deleteAll() {
		repository.deleteAll();
	}

}
