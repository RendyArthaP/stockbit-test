import { render } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  it("Navbar Rendered", () => {
    const { getByTestId } = render(
      <Navbar /> 
    )
    const navbar = getByTestId("navbar");
    expect(navbar).toBeTruthy();
  });
});