import { render, screen } from "@testing-library/react";
import App from "./App";

// jest will look for any files that ends with .test.js

test("renders learn react link", () => {
  // `render` from RTL will render the component you specified into a virtual HTML `document`
  // It appends a <div> into document.body and render the component at that div (in RTL the div it's called the "container")
  render(<App />);
  // `screen` is a handy object that let you query `document.body` easily: https://testing-library.com/docs/queries/about#screen
  // It has a `debug` method that basically console.log the whole document.body (stringified as HTML)
  screen.debug();
  // You use its QUERY METHODS to get the element you want from it, e.g. getByText search for elements with a child text node that matches your text string
  const linkElement = screen.getByText(/learn react/i);
  //                  vvv this matcher from jest-dom check if it is in the document
  expect(linkElement).toBeInTheDocument();
});
