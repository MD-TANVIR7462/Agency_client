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




// import { envConfig } from "@/lib/env.config";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../features/store";
// import { setUser } from "../features/auth/authSlice";
// const BASE_URL = envConfig.SERVER_BASE_URL;
// const baseQuery = fetchBaseQuery({
//   baseUrl: BASE_URL,
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;
//     if (token) {
//       headers.set("authorization", token);
//     }
//     return headers;
//   },
// });


// const baseQueryWithRefreshToken = async (args: any, api: any, extraOptions: any) => {
//   let result = await baseQuery(args, api, extraOptions)
// console.log(result)
//   if (result?.error?.status === 403) {
//     console.log("refresh....")
//     const res = await fetch(`${BASE_URL}/auth/login/refresh-token`, {
//       method: "POST",
//       credentials: "include"
//     })
//     const newData = await res.json()
//     console.log(newData, "new")
//     const user = (api.getState() as RootState).auth.user;
//     api.dispatch(
//       setUser({
//         user, token: newData.data.accessToken
//       })
//     )
//     result = await baseQuery(args, api, extraOptions)
//   }
//   return result
// }


// export const baseAPi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithRefreshToken,
//   endpoints: () => ({}),
// });
