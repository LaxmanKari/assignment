import React, { useState } from "react";
import Products from "../Products/Products.tsx";
import "./bodyContainer.css";
import Pagination from "../Pagination/Pagination.tsx";
import { ProductsData } from "../../data/productsData.ts";

function BodyContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsCount = ProductsData.length;

  const handlePageUpdation = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="body-container">
      <Products pageNumber={currentPage} />
      <Pagination
        totalProductsCount={productsCount}
        handlePageUpdation={handlePageUpdation}
      />
    </div>
  );
}

export default BodyContainer;
