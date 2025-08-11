package com.mwema.kcombackend.controllers;

import com.mwema.kcombackend.entities.Product;
import com.mwema.kcombackend.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("kcom/")
public class ProductController {
    private final ProductService productService;

    ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("products")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok().body(productService.getProducts());
    }
    @GetMapping("products/{id}")
    public ResponseEntity<Product> getAllProducts(@PathVariable Long id) {
        return ResponseEntity.ok().body(productService.getProductsById(id));
    }
}
