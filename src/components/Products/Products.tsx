import React from "react";
import ProductCard from "../ProductCard/ProductCard.tsx";
import "./Products.css";
import { ProductsData } from "../../data/productsData.ts";

const Products: React.FC = () => {
  return (
    <div className="products-container">
      {ProductsData.map((product, index) => (
        <ProductCard
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
