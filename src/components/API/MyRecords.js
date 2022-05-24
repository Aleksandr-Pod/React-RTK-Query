import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://9g4ym4tj9o.api.quickmocker.com
// https://628a0f12e5e5a9ad32206b7a.mockapi.io/
export const myRecordsAPI = createApi({
    reducerPath: 'myRecordsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "https://628a0f12e5e5a9ad32206b7a.mockapi.io/records/" }),
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

