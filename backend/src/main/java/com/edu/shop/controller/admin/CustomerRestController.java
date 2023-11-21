package com.edu.shop.controller.admin;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.edu.shop.domain.Customer;

import com.edu.shop.dto.CustomerDto;
import com.edu.shop.service.CustomerService;
import com.edu.shop.service.StorageService;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.micrometer.common.util.StringUtils;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/admin/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerRestController {

	@Autowired
	CustomerService customerService;
	@Autowired
	StorageService storageService;


	 @PostMapping(consumes = {"multipart/form-data"})
	public ResponseEntity<String> saveOrUpdate(
			@Validated @RequestPart("CustomerDto") CustomerDto dto,
            @RequestParam("imageFile") MultipartFile imageFile) {
		if (imageFile != null && !imageFile.isEmpty()) {
			UUID uuid = UUID.randomUUID();
			String uustring = uuid.toString();
			dto.setImage(storageService.getStoreFilename(imageFile, uustring));
			storageService.store(imageFile, dto.getImage());
		}

		Customer entity = new Customer();
		BeanUtils.copyProperties(dto, entity);
		Date currentDate = new Date();
		entity.setRegisteredDate(currentDate);
		customerService.save(entity);
		return ResponseEntity.ok("Lưu Khách Hàng Thành Công");
	}
	@PutMapping("/{id}")
	public ResponseEntity<Customer> updateCategory(@PathVariable Integer id, @RequestBody CustomerDto customerDto) {
		if (customerService.existsById(id)) {
			customerDto.setCustomerId(id);
			Customer entity = new Customer();
			BeanUtils.copyProperties(customerDto, entity);
			Customer updated = customerService.save(entity);
			return ResponseEntity.ok(updated);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@GetMapping("/{customerId}")
	public ResponseEntity<CustomerDto> edit(@PathVariable("customerId") Integer customerId) {
	    Optional<Customer> opt = customerService.findById(customerId);
	    if (opt.isEmpty()) {
	        // Trả về lỗi nếu không tìm thấy khách hàng
	        return ResponseEntity.notFound().build();
	    }
	    CustomerDto dto = new CustomerDto();
	    BeanUtils.copyProperties(opt.get(), dto);
	    return ResponseEntity.ok(dto);
	}	
	   @DeleteMapping("/{Id}")
	    public ResponseEntity<String> delete(@PathVariable("customerId") Integer customerId) throws IOException {
	        Optional<Customer> opt = customerService.findById(customerId);
	        if (opt.isPresent()) {
	            if (!StringUtils.isEmpty(opt.get().getImage())) {
	                storageService.delete(opt.get().getImage());
	            }
	            customerService.delete(opt.get());
	            return ResponseEntity.ok("Customer delete successful");
	        } else {
	            return ResponseEntity.ok("Customer not found");
	        }
	    }
	   

	   @PostMapping("/save-customer")
	    public ResponseEntity<Integer> saveCustomer(@Validated @RequestBody CustomerDto dto) {
	        // Save customer information
			Customer entity = new Customer();
			BeanUtils.copyProperties(dto, entity);
			Date currentDate = new Date();
			entity.setRegisteredDate(currentDate);
	        Customer savedCustomer = customerService.save(entity);
	        return ResponseEntity.ok(savedCustomer.getCustomerId()); // Return the customer ID
	    }

	    @PostMapping("/upload-image")
	    public ResponseEntity<String> uploadImage(
	    		 @RequestParam("customerId") Integer customerId,
	            @RequestParam("imageFile") MultipartFile imageFile) {
             customerService.uploadImage(customerId, imageFile);
	        return ResponseEntity.ok("Image uploaded successfully");
	    }
}
