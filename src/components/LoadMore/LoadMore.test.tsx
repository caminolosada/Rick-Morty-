import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import LoadMore from "./LoadMore";

describe("Given a Button component", () => {
  describe("When it is rendered and receives the text 'Load more'", () => {
    test("Then it should show the received text inside", () => {
      const expectedText = "Load more";

      renderWithProviders(<LoadMore />);

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });
});
