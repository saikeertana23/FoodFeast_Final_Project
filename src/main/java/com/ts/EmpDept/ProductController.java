package com.ts.EmpDept;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ts.dao.ProductDAO;
import com.ts.model.Product;



@RestController
public class ProductController {
	
	@Autowired
	ProductDAO prodDAO;
	
	@RequestMapping("getAllProducts")
	public List<Product> getAllProducts() {
		return prodDAO.getAllProducts();
	}
	
	 @RequestMapping("/getProductById/{ID}")
		public Product getProductById(@PathVariable("ID") int id) {
			// Data Binding
			return prodDAO.getProductById(id);
	}
	
	 @RequestMapping("/getProductByName/{name}")
		public Product getProductByName(@PathVariable("name") String pName) {
			return prodDAO.getProductByName(pName);
		}
	 

     @PostMapping("registerProduct")
	public Product registerProduct( @RequestBody Product prod) {
		return prodDAO.registerProduct(prod);
	}
 
	 
     @PutMapping("updateProd")
     public Product updateProduct(@RequestBody Product product) {	
         return prodDAO.updateProduct(product);
     }
     
     
     @DeleteMapping("delProd/{ID}")
 	public String deleteProductById(@PathVariable("ID") int id) {
 		prodDAO.deleteProductById(id);
 		return "Product with product id " + id + " is deleted.";
 	}
      
	@RequestMapping("/showProducts")
	public List<Product> showProducts(){
		List<Product> products = Arrays.asList(
                new Product(1,"Product 1", 19.99),
                new Product(2,"Product 2", 29.99),
                new Product(3,"Product 3", 39.99)
        );

       
        return products;
	}
}
