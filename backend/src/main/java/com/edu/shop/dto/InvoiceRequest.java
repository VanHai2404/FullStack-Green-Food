package com.edu.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InvoiceRequest {
    private String fullName;
    private String email;
    private String phone;
    private Double amont;
    private String province;
    private String district;
    private String commune;
    private String houseNumber;

    // getters and setters
}