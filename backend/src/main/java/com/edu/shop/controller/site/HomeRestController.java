package com.edu.shop.controller.site;

import java.util.HashMap;
import java.util.Map;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.edu.shop.domain.Category;
import com.edu.shop.domain.Product;
import com.edu.shop.domain.ProductImage;
import com.edu.shop.service.CategoryService;
import com.edu.shop.service.ProductImageService;
import com.edu.shop.service.ProductService;
import com.edu.shop.service.StorageService;

@RestController
@RequestMapping("/api/home")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeRestController {

    @Autowired
    ProductService productService;
    
    @Autowired 
    CategoryService categoryService;
    
    @Autowired
    StorageService storageService;
    
    @Autowired
    ProductImageService imageService;

//    @GetMapping("/images/{filename:.+}")
//    public ResponseEntity<Resource> saveFile(@PathVariable String filename){
//        Resource file = storageService.loadAsResource(filename);
//        return ResponseEntity.ok()
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
//                .body(file);
//    }

    @GetMapping("")
    public ResponseEntity<List<Product>> home() {
        List<Product> products = productService.findAll();
        return ResponseEntity.ok(products);
    }


    @GetMapping("/{productId}")
    public ResponseEntity<Map<String, Object>> detail(@PathVariable("productId") Integer productId) {
        Optional<Product> optional = productService.findById(productId);
        Map<String, Object> response = new HashMap<>();

        if (optional.isPresent()) {
            response.put("product", optional.get());

            List<ProductImage> images = imageService.findAll();
            List<String> anh = new ArrayList<>();

            for (ProductImage productImage : images) {
                if (productImage.getProduct().equals(optional.get())) {
                    anh.add(productImage.getImageUrl());
                    System.out.println("Anh tim thay: " + productImage);
                }
            }
            System.out.println("ANH Lien Quan :" + anh);
            response.put("images", anh);

            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Product not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @GetMapping("type")
    public ResponseEntity<Map<String, Object>> searchByCategory(@RequestParam("param") Long param) {
        Optional<Category> optional = categoryService.findById(param);
        Map<String, Object> response = new HashMap<>();

        try {
            List<Product> productList = productService.findByCategory(optional.orElse(null));
            response.put("CategoryName", optional.map(Category::getName).orElse(null));
            response.put("Category", optional.map(Category::getName).map(String::toUpperCase).orElse(null));
            System.out.println("So Luong" + productList.size());
            response.put("size", productList.size());
            response.put("products", productList);
        } catch (Exception e) {
            response.put("message", "Error fetching products by category");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }

        return ResponseEntity.ok(response);
    }
}


 
