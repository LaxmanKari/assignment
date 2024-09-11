import React, { useEffect, useState } from "react";
import type { PaginationProps } from "../../types/product.d.ts";
import './pagination.css';

const Pagination: React.FC<PaginationProps> = ({
  totalProductsCount,
  handlePageUpdation,
}) => {
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPageUpdation = (page: number) => {
    handlePageUpdation(page);
    setCurrentPage(page);
  };

  const handlePrevBtnClick = () => {
    handleCurrentPageUpdation(currentPage - 1); 
  }

  const handleNextBtnClick = () => {
    handleCurrentPageUpdation(currentPage + 1);  
  }

  useEffect(() => {
    const setPages = () => {
      const remainder = totalProductsCount % 7;
      if (remainder === 0) {
        setPagesCount(totalProductsCount / 7);
      } else {
        const pages = totalProductsCount + (7 - remainder);
        setPagesCount(pages / 7);
      }
    };
    setPages();
  }, [totalProductsCount]);
  return (
    <div className="pagination">
      {currentPage !== 1 ? (
        <button className="pagination-btn prev-btn" onClick={handlePrevBtnClick}>
          <i className="fa-solid fa-arrow-left" />
        </button>
      ) : null}

      {Array.from({ length: pagesCount }, (_, index) => (
        <button
          className={`pagination-btn page-btn ${currentPage === index + 1 ? 'active' : '' }`}
          key={index}
          onClick={() => handleCurrentPageUpdation(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {
        currentPage !== pagesCount ? (
          <button className="pagination-btn next-btn" onClick={handleNextBtnClick}>
            <i className="fa-solid fa-arrow-right" />
          </button>
        ) : null
      }
    </div>
  );
};

export default Pagination;
