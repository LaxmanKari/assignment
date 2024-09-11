import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
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

  test("renders product card with props", () => {
    render(<ProductCard {...props} />);

    expect(screen.getByAltText("Test Product")).toHaveAttribute(
      "src",
      "/images/Chair.jpg"
    );
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("Rating:4.5")).toBeInTheDocument();
  });

  test("calls handleClickProduct with the current id on click", () => {
    render(<ProductCard {...props} />);

    fireEvent.click(screen.getByAltText("Test Product"));
    expect(mockHandleClickProduct).toHaveBeenCalledWith(1);
    expect(mockHandleClickProduct).toHaveBeenCalledTimes(1);
  });
});
