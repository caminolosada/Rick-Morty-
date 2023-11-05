import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";
import LoadMore from "./LoadMore";

describe("Given a Button component", () => {
  describe("When it is rendered and receives the text 'Load more'", () => {
    test("Then it should show the received text inside", () => {
      const expectedText = "Load more";
      const onClick = vi.fn();

      renderWithProviders(<LoadMore onClick={onClick} />);

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });
  describe("When it receives a function and an user clicks on it", () => {
    test("Then it shoul call that function", async () => {
      const expectedText = "Load more";
      const onClick = vi.fn();

      renderWithProviders(<LoadMore onClick={onClick} />);

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      await userEvent.click(loadMoreButton);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
