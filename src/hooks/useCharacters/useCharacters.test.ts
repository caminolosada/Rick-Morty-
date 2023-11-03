import { renderHook } from "@testing-library/react";
import { charactersMock } from "../../mocks/charactersMock";
import useCharacters from "./useCharacters";

describe("Given an useCharacters function", () => {
  describe("When it calls the getCharacters function", () => {
    test("Then it shoud return a list with books", async () => {
      const expectedResponse = charactersMock;

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters());

      const response = await getCharacters();

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
