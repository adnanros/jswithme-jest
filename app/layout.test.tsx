/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";
import RootLayout from "./layout";

it("Layout: Works with Server Components", () => {
  render(
    <RootLayout>
    <Page/>
  </RootLayout>);
  expect(screen.queryByText('Main Page')).toBeInTheDocument();
});
