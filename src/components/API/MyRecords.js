import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myRecordsAPI = createApi({
    reducerPath: 'myRecordsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/records/" }),
    endpoints: (builder) => ({
        getMyRecords: builder.query({
            query: number => `${number}`
        })
    })
})

export const { useGetMyRecordsQuery } = myRecordsAPI;