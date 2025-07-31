package com.mwema.kcombackend.repository;

import com.mwema.kcombackend.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface KCOMRepository extends JpaRepository<Product,Long> {}
