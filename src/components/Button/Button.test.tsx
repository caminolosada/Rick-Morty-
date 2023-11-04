import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered and receives the text 'Load More'", () => {
    test("Then it should show the received text inside", () => {
      const expectedText = "Load More";

      renderWithProviders(<Button classname="button" text={expectedText} />);

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });
});
