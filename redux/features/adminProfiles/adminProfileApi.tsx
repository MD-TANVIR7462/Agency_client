import { baseAPi } from "@/redux/api/baseApi";

const adminProfilesApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAlladmins: builder.query({
      query: () => ({
        url: "/auth/register/all",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAlladminsQuery } = adminProfilesApi;
