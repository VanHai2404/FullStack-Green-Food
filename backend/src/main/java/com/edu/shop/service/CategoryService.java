package com.edu.shop.service;

import java.util.List;
import java.util.Optional;

import com.edu.shop.domain.Category;

public interface CategoryService {

	void delete(Category entity);

	Category getById(Long id);

	void deleteById(Long id);

	long count();

	Optional<Category> findById(Long id);

	List<Category> findAllById(Iterable<Long> ids);

	List<Category> findAll();

	<S extends Category> S save(S entity);

	boolean existsById(Long id);

}
