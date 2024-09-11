import React from "react";
import { Product } from "../../types/product";
import "./productCard.css";

const ProductCard: React.FC<Product> = ({
  image,
  name,
  category,
  price,
  rating,
  handleClickProduct,
  id
}) => {
  const handleProductCardClick = () => {
    handleClickProduct(id);
  };

  return (
    <div className="product-card" onClick={handleProductCardClick}>
      <img src="/images/Chair.jpg" alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <div className="product-meta">
          <span className="product-category">{category}</span>
          <span className="product-price">{price}</span>
        </div>
        <div className="product-footer">
          <span>Rating:{rating}</span>
          <button className="add-to-cart-button">
            <i className="fa-solid fa-cart-plus"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
