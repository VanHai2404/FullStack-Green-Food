package com.edu.shop.dto;

import java.util.Date;

import com.edu.shop.domain.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductCommentDto {
	private Integer commentId;
	private String detail;
	private Boolean status;
	private String images;
	private Date createDate;
	private Date updatedDate;
	private Customer customer;
}