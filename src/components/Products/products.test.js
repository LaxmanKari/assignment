import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "./Products.tsx";

jest.mock("../ProductCard/ProductCard.tsx", () => () => {
  const mockHandleClickProduct = jest.fn();

  const props = {
    image: "/images/Chair.jpg",
    name: "Test Product",
    category: "Test Category",
    price: "$10",
    rating: "4.5",
    handleclickproduct: mockHandleClickProduct,
    id: 1,
  };
  return <div data-testid="product-card" onClick={() => props.handleclickproduct(1)}/>;
});

jest.mock("../Filter/Filter.tsx", () => () => <div data-testid="filter" />);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Product Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Filter and ProductCard Component", () => {
    render(<Products pagenumber={1} />);

    expect(screen.getByTestId("filter")).toBeInTheDocument();
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(7);
  });
});
