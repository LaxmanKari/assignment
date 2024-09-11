import React from "react";
import ProductCard from "../ProductCard/ProductCard.tsx";
import "./Products.css";
import { ProductsData } from "../../data/productsData.ts";
import Filter from "../Filter/Filter.tsx";
import type { ProductsProps } from "../../types/product";

const Products: React.FC<ProductsProps> = ({ pageNumber }) => {
  const endIndex = (pageNumber * 7) + 1;
  const startIndex = endIndex - 7;
  const filteredProducts = ProductsData.slice(startIndex, endIndex);
  return (
    <div className="products-container">
      <Filter />
      {filteredProducts.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default Products;
