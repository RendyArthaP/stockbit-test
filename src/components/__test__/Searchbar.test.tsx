import { render } from "@testing-library/react";
import Searchbar from "../Searchbar";

describe("Searchbar Component", () => {
  it("Searchbar Rendered", () => {
    const { getByTestId } = render(
      <Searchbar 
        titleMovie={""} 
        setTitleMovie={""} 
        movieList={[]} 
      />
    )
    const search = getByTestId("searchBar");
    expect(search).toBeTruthy();
  });
});