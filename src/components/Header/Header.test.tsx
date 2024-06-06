import React from "react";
import { render, screen } from "@testing-library/react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
// test nav-menu
test("renders navigation menus", () => {
  render(<Header toggleTheme={() => true} />);
  expect(screen.getByText(/HOME/i)).toBeInTheDocument();
});

// test click over dropdown button
configure({ adapter: new Adapter() });
describe("Test Navbar dropdown component", () => {
  test("Test click event", () => {});
});
