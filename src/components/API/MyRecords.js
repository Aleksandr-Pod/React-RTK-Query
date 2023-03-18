import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://641322a7a68505ea732a5d2e.mockapi.io/api/v1/container";

export const myRecordsAPI = createApi({
    reducerPath: 'myRecordsAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['records'],
    endpoints: (builder) => ({
        getMyRecords: builder.query({
            query: () => '',
            providesTags: ['records']
        }),
        getMyRecordById: builder.query({
            query: id => `${id}`,
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
        }),
        editMyRecord: builder.mutation({
            query: data => ({
                url: `${data.id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['records']
        })

    }),
})

export const {
    useGetMyRecordsQuery,
    useAddMyRecordMutation,
    useDeleteMyRecordMutation,
    useGetMyRecordByIdQuery,
    useEditMyRecordMutation
} = myRecordsAPI;

