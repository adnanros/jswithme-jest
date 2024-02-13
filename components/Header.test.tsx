/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("Header: Has right contents", () => {
  render(<Header />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});