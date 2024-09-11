import React from "react";
import { useParams } from "react-router-dom";
import { findProductById } from "../../utils/helpers.ts";
import ProductCarousel from "../ProductCarousel/ProductCarousel.tsx";
import './productDetails.css';

const ProductDetails: React.FC = () => {
  const { productId } = useParams();
  const product = findProductById(productId);
  const mockProductDescription =
    "This is a mock description for products, It's a goog product with good reasonable price and with a good made quality";
  const mockImages = ['chair.jpg', 'cycle.jpg']; 
  if (!product) {
    <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-carousel-container">
        <ProductCarousel images={mockImages} />
      </div>
      <div className="product-info">
        <h1>{product?.name}</h1>
        <h2>{product?.category}</h2>
        <p>{mockProductDescription}</p>
        <p>Price per unit</p>
        <div className="details-group">
        <span>{product?.price}</span>
        <button className="buy-now-btn">Buy now</button>
        <button className="cart-btn">
          <i className="fa-solid fa-cart-plus"></i>{" "}
        </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
