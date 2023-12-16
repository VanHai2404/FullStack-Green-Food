package com.edu.shop.controller.site;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.edu.shop.domain.Address;
import com.edu.shop.domain.Customer;
import com.edu.shop.model.dto.AddressDTO;
import com.edu.shop.model.dto.CustomerDto;
import com.edu.shop.service.AddressService;
import com.edu.shop.service.CustomerService;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:3001")
public class ProfileRestController {
	@Autowired
	AddressService addressService;

	@Autowired
	CustomerService customerService;

	@GetMapping("/address/{customerId}")
	public List<Address> getAddressCustomer(@PathVariable Integer customerId) {
		List<Address> addresses = addressService.findByCustomer_CustomerId(customerId);
		if (addresses.isEmpty()) {
			return Collections.emptyList();
		}
		return addresses;
	}

	@PostMapping("/address")
	public ResponseEntity<String> addAddress(@RequestParam("customerId") Integer customerId,@RequestBody AddressDTO dto) {
		System.out.println("ID KHÁCH HÀNG "+customerId);
	 Optional<Customer> customer = customerService.findById(customerId);
		if (dto == null || dto.getStreetNumber() == null || dto.getCity() == null) {
			return new ResponseEntity<>("Invalid address data", HttpStatus.BAD_REQUEST);
		}
		if(customer.get()==null) {
			return new ResponseEntity<>("Invalid Cusstomer data", HttpStatus.BAD_REQUEST);
		}
		Address address = new Address();
		BeanUtils.copyProperties(dto, address);
		address.setCustomer(customer.get());
		addressService.save(address);
		return new ResponseEntity<>("Address added successfully", HttpStatus.CREATED);

	}

	@PutMapping("/address/{id}")
	public ResponseEntity<Address> updateAddress(@PathVariable Integer id, @RequestBody AddressDTO addressDTO) {
		if (addressService.existsById(id)) {
			Optional<Customer> customer = customerService.findById(id);

			if (customer.isPresent()) {
				Address entity = new Address();
				BeanUtils.copyProperties(addressDTO, entity);
				entity.setCustomer(customer.get());
				Address updated = addressService.save(entity);
				return ResponseEntity.ok(updated);
			} else {
				// Trường hợp không tìm thấy khách hàng
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
		} else {
			// Trường hợp không tìm thấy địa chỉ
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@DeleteMapping("/address/{id}")
	public ResponseEntity<String> deleteAddressById(@PathVariable Integer id) {
		// Kiểm tra sự tồn tại của địa chỉ
		if (addressService.existsById(id)) {
			// Thực hiện xóa địa chỉ theo ID
			addressService.deleteById(id);
			return new ResponseEntity<>("Address deleted successfully", HttpStatus.OK);
		} else {
			// Trường hợp không tìm thấy địa chỉ
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Address not found");
		}
	}

	@PutMapping("/customer/{id}")
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

	@PostMapping("/upload-image")
	public ResponseEntity<String> uploadImage(@RequestParam("customerId") Integer customerId,
			@RequestParam("imageFile") MultipartFile imageFile) {
		customerService.uploadImage(customerId, imageFile);
		return ResponseEntity.ok("Image uploaded successfully");
	}
	
	
	
	

}
