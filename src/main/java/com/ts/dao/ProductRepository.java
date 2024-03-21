//package com.ts.dao;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import com.ts.model.Product;
//
//@Repository
//public interface ProductRepository extends JpaRepository<Product, Integer> {
//
//	// SELECT * FROM Product p WHERE p.productName = name;
//		// SELECT * FROM product WHERE product_name = 'Box';
////		@Query("from Product p where p.productName = :name")
//		Product findByName(@Param("name") String name);
//}



package com.ts.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ts.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    // Corrected query to match the property name in the entity
    @Query("from Product p where p.prodName = :name")
    Product findByName(@Param("name") String name);
}
