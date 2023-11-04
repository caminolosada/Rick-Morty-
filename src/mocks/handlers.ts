import { http, HttpResponse } from "msw";
import { DbResponseStructure } from "../types";
import { charactersMock, emptyMock } from "./charactersMock";

export const apiUrl = import.meta.env.VITE_API_URL;

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
