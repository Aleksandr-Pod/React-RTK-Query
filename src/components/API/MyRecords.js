import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myRecordsAPI = createApi({
    reducerPath: 'myRecordsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/records/" }),
    tagTypes: ['records'],
    endpoints: (builder) => ({
        getMyRecords: builder.query({
            query: number => `${number}`,
            providesTags: ['records']
        }),
        addMyRecord: builder.mutation({
            query: data => ({
                url: "",
                method: "POST",
                body: data
            }),
            invalidatesTags: ['records']
        }),
        deleteMyRecord: builder.mutation({
            query: id => ({
            url: `${id}`,
            method: "DELETE",
            }),
            invalidatesTags: ['records']
        })
    }),
})

export const { useGetMyRecordsQuery, useAddMyRecordMutation, useDeleteMyRecordMutation } = myRecordsAPI;

