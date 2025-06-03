import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://agency-server-gamma.vercel.app/api/v1", credentials: "include" }),
  endpoints: () => ({}),
});
