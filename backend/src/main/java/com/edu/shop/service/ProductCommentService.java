package com.edu.shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.edu.shop.domain.ProductComment;

public interface ProductCommentService {

	void deleteAll();

	<S extends ProductComment> List<S> findAll(Example<S> example);

	void deleteAllById(Iterable<? extends Integer> ids);

	void delete(ProductComment entity);

	ProductComment getById(Integer id);

	void deleteById(Integer id);

	long count();

	ProductComment getOne(Integer id);

	<S extends ProductComment> boolean exists(Example<S> example);

	boolean existsById(Integer id);

	Optional<ProductComment> findById(Integer id);

	List<ProductComment> findAllById(Iterable<Integer> ids);

	List<ProductComment> findAll();

	Page<ProductComment> findAll(Pageable pageable);

	<S extends ProductComment> Optional<S> findOne(Example<S> example);

	<S extends ProductComment> List<S> saveAll(Iterable<S> entities);

	<S extends ProductComment> S save(S entity);

}
