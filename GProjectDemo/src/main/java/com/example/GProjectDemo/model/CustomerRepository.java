package com.example.GProjectDemo.model;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{

	Optional<Customer> findByCustomerId(String customerId);
	
	Boolean existsByCustomerId(String customerId); 
	
}
