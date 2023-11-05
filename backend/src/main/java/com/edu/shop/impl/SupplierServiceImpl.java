package com.edu.shop.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.edu.shop.domain.Supplier;
import com.edu.shop.repository.SupplierRepository;
import com.edu.shop.service.SupplierService;

@Service
public class SupplierServiceImpl implements SupplierService{
	@Autowired
	SupplierRepository suppllieRepository;

	@Override
	public <S extends Supplier> S save(S entity) {
		return suppllieRepository.save(entity);
	}

	@Override
	public <S extends Supplier> Optional<S> findOne(Example<S> example) {
		return suppllieRepository.findOne(example);
	}

	@Override
	public List<Supplier> findAll(Sort sort) {
		return suppllieRepository.findAll(sort);
	}

	@Override
	public Page<Supplier> findAll(Pageable pageable) {
		return suppllieRepository.findAll(pageable);
	}

	@Override
	public List<Supplier> findAll() {
		return suppllieRepository.findAll();
	}

	@Override
	public List<Supplier> findAllById(Iterable<Long> ids) {
		return suppllieRepository.findAllById(ids);
	}

	@Override
	public Optional<Supplier> findById(Long id) {
		return suppllieRepository.findById(id);
	}

	@Override
	public boolean existsById(Long id) {
		return suppllieRepository.existsById(id);
	}

	@Override
	public Supplier getOne(Long id) {
		return suppllieRepository.getOne(id);
	}

	@Override
	public long count() {
		return suppllieRepository.count();
	}

	@Override
	public void deleteById(Long id) {
		suppllieRepository.deleteById(id);
	}

	@Override
	public Supplier getById(Long id) {
		return suppllieRepository.getById(id);
	}

	@Override
	public void delete(Supplier entity) {
		suppllieRepository.delete(entity);
	}

	@Override
	public void deleteAll() {
		suppllieRepository.deleteAll();
	}
	
	
}
