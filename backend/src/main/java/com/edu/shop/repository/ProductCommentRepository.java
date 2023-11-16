package com.edu.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.shop.domain.ProductComment;

@Repository
public interface ProductCommentRepository extends JpaRepository<ProductComment, Integer>{

}
