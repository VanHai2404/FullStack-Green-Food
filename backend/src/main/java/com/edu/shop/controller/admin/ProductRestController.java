package com.edu.shop.controller.admin;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import com.edu.shop.domain.Category;
import com.edu.shop.domain.Product;
import com.edu.shop.domain.ProductImage;
import com.edu.shop.domain.Supplier;
import com.edu.shop.dto.CategoryDto;
import com.edu.shop.dto.ProductDto;
import com.edu.shop.dto.SupplierDto;
import com.edu.shop.service.CategoryService;
import com.edu.shop.service.ProductImageService;
import com.edu.shop.service.ProductService;
import com.edu.shop.service.StorageService;
import com.edu.shop.service.SupplierService;

import io.micrometer.common.util.StringUtils;


@RestController 
@RequestMapping("/api/admin/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductRestController {
	   @Autowired
	    CategoryService categoryService;

	    @Autowired
	    SupplierService supplierService;
	    
	    @Autowired
	    ProductService productService;
	    
	    @Autowired
	    StorageService storageService;

	    @Autowired
	    ProductImageService imageService;
	    
	    @GetMapping("/categories")
	    public ResponseEntity<List<CategoryDto>> getAllCategories() {
	        List<CategoryDto> categoryDtos = categoryService.findAll().stream().map(item -> {
	            CategoryDto dto = new CategoryDto();
	            BeanUtils.copyProperties(item, dto);
	            return dto;
	        }).toList();
	        return ResponseEntity.ok(categoryDtos);
	    }
	    @GetMapping("/suppliers")
	    public ResponseEntity<List<SupplierDto>> getAllSuppliers() {
	        List<SupplierDto> supplierDtos = supplierService.findAll().stream().map(item -> {
	            SupplierDto dto = new SupplierDto();
	            BeanUtils.copyProperties(item, dto);
	            return dto;
	        }).toList();
	        return ResponseEntity.ok(supplierDtos);
	    }
	    @GetMapping("/{id}")
	    public ResponseEntity<Product> getProductById(@PathVariable Integer productId) {
	        Optional<Product> opt = productService.findById(productId);
	        if (opt.isPresent()) {
	            Product entity = opt.get();
	            return ResponseEntity.ok(entity);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE })
	    public ResponseEntity<String> saveProduct(@RequestPart("imageFiles") MultipartFile[] imageFiles,
	            @RequestPart("dto")  ProductDto dto, BindingResult result) {

	        // Kiểm tra lỗi trong dữ liệu đầu vào
//	        if (result.hasErrors()) {
//	            return ResponseEntity.badRequest().body("Lỗi dữ liệu đầu vào!");
//	        }

	        Product entity = new Product();
	        BeanUtils.copyProperties(dto, entity);

//	        // Xử lý và lưu hình ảnh sản phẩm
//	        if (!dto.getImageFile().isEmpty()) {
//	            UUID uuid = UUID.randomUUID();
//	            String uutring = uuid.toString();
//	            entity.setImage(storageService.getStoreFilename(dto.getImageFile(), uutring));
//	            storageService.store(dto.getImageFile(), entity.getImage());
//	            entity.setEnterdDate(new Date());
//	        }
	        entity.setImage("Test");

	        // Lưu sản phẩm vào cơ sở dữ liệu
	        Product savedProduct = productService.save(entity);
	    	Category category = new Category();
			category.setCategoryId(dto.getCategoryId());
			entity.setCategory(category);
			Supplier supplier = new Supplier();
			supplier.setSupplierId(dto.getSuppllierId());
			entity.setSupplier(supplier);

	        // Xử lý và lưu tệp hình ảnh từ mảng MultipartFile
	        for (MultipartFile imageFile : imageFiles) {
	            ProductImage image = new ProductImage();
	            // Xử lý và lưu tệp hình ảnh
	            String fileName = imageFile.getOriginalFilename();
	            UUID uuid = UUID.randomUUID();
	            String uutring = uuid.toString();
	            image.setImageUrl(storageService.getStoreFilename(imageFile, uutring));
	            storageService.store(imageFile, image.getImageUrl());
	            image.setProduct(savedProduct);
	            imageService.save(image);
	        }

	        // Trả về thông báo thành công
	        return ResponseEntity.ok("Sản phẩm đã được lưu thành công!");
	    }
	    @DeleteMapping("/{Id}")
	    public ResponseEntity<Void> deleteProduct(@PathVariable Integer productId) throws IOException {
	        Optional<Product> opt = productService.findById(productId);

			if (opt.isPresent()) {
				if (!StringUtils.isEmpty(opt.get().getImage())) {
					storageService.delete(opt.get().getImage());
					System.out.println("đã xóa Imge -----------" + opt.get().getImage());
				}
				List<ProductImage> images = imageService.findAll();
				Set<ProductImage> imagesl = new HashSet<>();

				for (ProductImage productImage : images) {
					if (productImage.getProduct().equals(opt.get())) {
						imagesl.add(productImage);
						System.out.println("Anh tim thay: " + productImage);
					}
				}

				System.out.println("ANH Lien Quan :" + imagesl);
				// Xóa tất cả các hình ảnh liên quan của sản phẩm
				if (!imagesl.isEmpty()) {

					for (ProductImage image : imagesl) {
						storageService.delete(image.getImageUrl());
						System.out.println("đã xóa Imges -----------" + image.getImageUrl());
						System.out.println("ID IMG" + image.getImageId());
						imageService.deleteById(image.getImageId());
					}
				}

				productService.delete(opt.get());
				  return ResponseEntity.notFound().build();
			} else {
				  return ResponseEntity.notFound().build();
			
			}
	    }

}
 