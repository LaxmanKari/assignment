import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BodyContainer from "./BodyContainer";
import Products from "../Products/Products";
import Pagination from "../Pagination/Pagination";

jest.mock("../Products/Products", () => (props) => (
  <div data-testid="products" {...props} />
));
jest.mock("../Pagination/Pagination", () => (props) => (
  <div data-testid="pagination">
    <button onClick={() => props.handlepageupdation(2)}></button>
  </div>
));

const mockProducts = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  name: `Products ${index + 1}`,
}));

describe("BodyContainer Component", () => {
  test("renders Products and Pagination components", () => {
    render(<BodyContainer />);

    expect(screen.getByTestId("products")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
