import {ProductsData} from "../data/productsData.ts";

export const findProductById = (id) => {
  // id is hardcoded using the index but we can have find using id 
  return ProductsData[id - 1]; 
}