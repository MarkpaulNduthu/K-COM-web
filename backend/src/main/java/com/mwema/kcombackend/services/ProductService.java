package com.mwema.kcombackend.services;

import com.mwema.kcombackend.entities.Product;
import com.mwema.kcombackend.repository.KCOMRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final KCOMRepository repository;

    ProductService(KCOMRepository repository) {
        this.repository = repository;
    }

    public List<Product> getProducts() {
        return repository.findAll();
    }

    public Product getProductsById(Long id) {
        return repository.findById(id).isPresent() ? repository.findById(id).get() : null;
    }
}
