package com.edu.shop.dto;

import java.util.Date;
import java.util.Set;

import org.springframework.web.multipart.MultipartFile;

import com.edu.shop.constants.ProductUnit;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

	private Integer productId;

	private String name;

	private Integer quantity;

	private Double untiPrice;

	private String image;
	private MultipartFile ImageFile;

	private String description;

	private String metaKeywords;

	private Double discount;

	private Date enterdDate;

	private Date UpdateDate;

	private Date hot;

	private Integer ViewCount;

	private Integer CreatedBy;
	private Short status;

	private ProductUnit unit; // Đơn vị sản phẩm, sử dụng Enum ProductUnit

	private Long suppllierId;

	private Long accountId;

	private Long categoryId;

}
