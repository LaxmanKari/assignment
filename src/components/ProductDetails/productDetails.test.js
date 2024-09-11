import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { findProductById } from "../../utils/helpers";

jest.mock("../../utils/helpers", () => ({
  findProductById: jest.fn(),
}));

jest.mock("../ProductCarousel/ProductCarousel", () => () => (
  <div>ProductCarousel</div>
));

describe("Product Details", () => {
  const mockProduct = {
    image: "/images/Chair.jpg",
    name: "Test Product",
    category: "Test Category",
    price: "$10",
    id: 1,
  };

  test("renders product details when product is found", () => {
    findProductById.mockImplementation(() => mockProduct);

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("ProductCarousel")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
  });

  test('renders "product not found" when product is not found', () => {
    findProductById.mockImplementation(() => null);

    render(
      <MemoryRouter initialEntries={["/product/999"]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Product not found')).toBeInTheDocument();
  });
});
