import { http, HttpResponse } from "msw";
import { apiUrl } from "../hooks/useCharacters/useCharacters";
import { DbResponseStructure } from "../types";
import { charactersMock, emptyMock } from "./charactersMock";

export const handlers = [
  http.get(`${apiUrl}/character`, () => {
    return HttpResponse.json<DbResponseStructure>(charactersMock, {
      status: 200,
    });
  }),
];

export const errorHandlers = [
  http.get(`${apiUrl}/character`, () => {
    return HttpResponse.json<DbResponseStructure>(emptyMock, {
      status: 401,
    });
  }),
];
