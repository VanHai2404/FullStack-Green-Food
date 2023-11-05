package com.edu.shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.edu.shop.domain.Supplier;

public interface SupplierService {

	void deleteAll();

	void delete(Supplier entity);

	Supplier getById(Long id);

	void deleteById(Long id);

	long count();

	Supplier getOne(Long id);

	boolean existsById(Long id);

	Optional<Supplier> findById(Long id);

	List<Supplier> findAllById(Iterable<Long> ids);

	List<Supplier> findAll();

	Page<Supplier> findAll(Pageable pageable);

	List<Supplier> findAll(Sort sort);

	<S extends Supplier> Optional<S> findOne(Example<S> example);

	<S extends Supplier> S save(S entity);

}
