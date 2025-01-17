import React from "react";
import ProductCard from "../ProductCard/ProductCard.tsx";
import "./products.css";
import { ProductsData } from "../../data/productsData.ts";
import Filter from "../Filter/Filter.tsx";
import type { ProductsProps } from "../../types/product";
import { useNavigate } from "react-router-dom";

const Products: React.FC<ProductsProps> = ({ pagenumber }) => {
  const navigate = useNavigate();
  const endIndex = pagenumber * 7 + 1;
  const startIndex = endIndex - 7;
  const filteredProducts = ProductsData.slice(startIndex, endIndex);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };
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
          handleclickproduct={handleProductClick}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
