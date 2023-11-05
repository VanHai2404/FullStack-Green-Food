package com.edu.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SupplierDto {

	private Long supplierId;
    private String name;
    private String address;
    private String contactNumber;
}
