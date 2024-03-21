package com.ts.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ts.model.Product;

@Service
public class ProductDAO {

	@Autowired
	ProductRepository prodRepo;
	
	public List<Product> getAllProducts() {
		return prodRepo.findAll();
	}
	
	 public Product getProductById(int id) {
			return prodRepo.findById(id).orElse(new Product());
	}
	 
	public Product getProductByName(String name) {
			return prodRepo.findByName(name);
	}
	
	public Product registerProduct(Product prod) {
		return prodRepo.save(prod);
	}
	
	 public Product updateProduct(Product prod) {
			return prodRepo.save(prod);
    }
	 
	 public void deleteProductById(int id) {
			prodRepo.deleteById(id);
	}
	 
	 
}
