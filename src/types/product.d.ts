export interface Product {
  image: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  handleClickProduct?;
  id?: number,
}

export interface PaginationProps {
  totalProductsCount: number;
  handlePageUpdation;
}

export interface ProductsProps {
  pageNumber: number;
}

export interface ProductDetailsProps {
  productId: string;
}