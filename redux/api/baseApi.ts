import { envConfig } from "@/lib/env.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";
const BASE_URL = envConfig.SERVER_BASE_URL;
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

export const baseAPi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,

  endpoints: () => ({}),
});
