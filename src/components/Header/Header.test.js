import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
// qqimport "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const renderWithRouter = () => {
  return render(
    <Router>
      <Header />
    </Router>
  );
};

describe("Header Component", () => {
  test("renders Header component correctly and matches snapshot", () => {
    const { asFragment } = renderWithRouter();
    expect(asFragment()).toMatchSnapshot();
  });

  test("should toggle menu visibility when menu button is clicked", () => {
    renderWithRouter();

    const menuButton = screen.getByTestId("menu-button");

    expect(screen.getByText("HOME")).toBeVisible();
    expect(screen.getByText("SHOP")).toBeVisible();
    expect(screen.getByText("MAGAZINE")).toBeVisible();

    fireEvent.click(menuButton);

    expect(screen.queryByText("HOME")).toBe(null);
    expect(screen.queryByText("SHOP")).toBe(null);
    expect(screen.queryByText("MAGAZINE")).toBe(null);

    fireEvent.click(menuButton);

    expect(screen.getByText("HOME")).toBeVisible();
    expect(screen.getByText("SHOP")).toBeVisible();
    expect(screen.getByText("MAGAZINE")).toBeVisible();
  });

  test("should navigate to home page when HOME button is clicked", () => {
    const navigate = jest.fn();

    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(navigate);

    renderWithRouter();

    fireEvent.click(screen.getByText("HOME"));

    expect(navigate).toHaveBeenCalledWith("/");
  });

  test("should render login button and icon buttons correctly", () => {
    renderWithRouter();
    expect(screen.getByText("LOGIN")).toBeVisible();
    expect(screen.getByTestId("search-button")).toBeVisible();
    expect(screen.getByTestId("cart-button")).toBeVisible();
  });
});
