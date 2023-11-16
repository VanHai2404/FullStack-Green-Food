package com.edu.shop.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.edu.shop.domain.ProductComment;
import com.edu.shop.repository.ProductCommentRepository;
import com.edu.shop.service.ProductCommentService;

@Service
public class ProductCommentServiceImpl implements ProductCommentService{

	@Autowired
	ProductCommentRepository productCommentRepository;

	@Override
	public <S extends ProductComment> S save(S entity) {
		return productCommentRepository.save(entity);
	}

	@Override
	public <S extends ProductComment> List<S> saveAll(Iterable<S> entities) {
		return productCommentRepository.saveAll(entities);
	}

	@Override
	public <S extends ProductComment> Optional<S> findOne(Example<S> example) {
		return productCommentRepository.findOne(example);
	}

	@Override
	public Page<ProductComment> findAll(Pageable pageable) {
		return productCommentRepository.findAll(pageable);
	}

	@Override
	public List<ProductComment> findAll() {
		return productCommentRepository.findAll();
	}

	@Override
	public List<ProductComment> findAllById(Iterable<Integer> ids) {
		return productCommentRepository.findAllById(ids);
	}

	@Override
	public Optional<ProductComment> findById(Integer id) {
		return productCommentRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return productCommentRepository.existsById(id);
	}

	@Override
	public <S extends ProductComment> boolean exists(Example<S> example) {
		return productCommentRepository.exists(example);
	}

	@Override
	public ProductComment getOne(Integer id) {
		return productCommentRepository.getOne(id);
	}

	@Override
	public long count() {
		return productCommentRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		productCommentRepository.deleteById(id);
	}

	@Override
	public ProductComment getById(Integer id) {
		return productCommentRepository.getById(id);
	}

	@Override
	public void delete(ProductComment entity) {
		productCommentRepository.delete(entity);
	}

	@Override
	public void deleteAllById(Iterable<? extends Integer> ids) {
		productCommentRepository.deleteAllById(ids);
	}

	@Override
	public <S extends ProductComment> List<S> findAll(Example<S> example) {
		return productCommentRepository.findAll(example);
	}

	@Override
	public void deleteAll() {
		productCommentRepository.deleteAll();
	}
	
	
}
