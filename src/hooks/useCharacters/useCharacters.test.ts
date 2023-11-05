import { renderHook } from "@testing-library/react";
import { charactersMock } from "../../mocks/charactersMock";
import useCharacters from "./useCharacters";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";
import { wrapWithProviders } from "../../utils/testUtils";

describe("Given an useCharacters function", () => {
  describe("When it calls the getCharacters function", () => {
    test("Then it shoud return a list with books", async () => {
      const expectedResponse = charactersMock;

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters(), { wrapper: wrapWithProviders });

      const response = await getCharacters();

      expect(response).toStrictEqual(expectedResponse);
    });
  });
  describe("When the getCharacters function is called and an error occurs", () => {
    test("Then it should throw an error", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters(), { wrapper: wrapWithProviders });

      expect(getCharacters()).rejects.toThrowError();
    });
  });
});
