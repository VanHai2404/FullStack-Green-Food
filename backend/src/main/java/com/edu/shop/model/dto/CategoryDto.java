package com.edu.shop.model.dto;

import java.io.Serializable;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
// kiếm DTo dung để kiếm tra dữ liệu và xứ lí dự liệu trền form nhập liệu
public class CategoryDto implements Serializable {

	private Long categoryId;
	@NotEmpty
	@Min(value = 2)
	private String name;
	private String slug;
	private String description;

}
