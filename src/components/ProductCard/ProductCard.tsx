import React from "react";
import { Product } from "../../types/product";
import "./ProductCard.css";

const ProductCard: React.FC<Product> = ({
  image,
  name,
  category,
  price,
  rating,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <div className="product-meta">
          <span className="product-category">{category}</span>
          <span className="product-price">{price}</span>
        </div>
        <div className="product-footer">
          <span>Rating:{rating}</span>
          <button className="add-to-cart-button">
            <i className="fas fa-shopping-cart"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;