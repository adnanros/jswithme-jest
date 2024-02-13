/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

it("Banner: Has right contents", () => {
  render(<Banner />);
  expect(screen.getByRole("heading")).toHaveTextContent("Banner");
});