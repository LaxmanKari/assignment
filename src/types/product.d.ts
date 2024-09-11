export interface Product {
  image: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  handleClickProduct?;
  id?: number;
  images?: string[];
}

export interface PaginationProps {
  totalproductscount: number;
  handlepageupdation;
}

export interface ProductsProps {
  pagenumber: number;
}

export interface ProductDetailsProps {
  productId: string;
}