import { render } from "@testing-library/react";
import CardMovies from "../CardMovies";

describe("Card Movies Component", () => {
  it("Card Movies Rendered", () => {
    const { queryByTestId } = render(
      <CardMovies
        // @ts-ignore
        movie={{}}
      /> 
    )
    const card = queryByTestId("cardMovies");
    expect(card).toBeTruthy();
  });
});