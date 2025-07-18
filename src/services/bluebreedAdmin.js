import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = "https://blueproject-1.onrender.com/api/v1/bluebreed";

export const blueBreedAdminApi = createApi({
    reducerPath: "blueBreedAdminApi",
    
    baseQuery: fetchBaseQuery({
        baseUrl: API,
        prepareHeaders: (headers) => {
        const token = localStorage.getItem("token")
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/account/admin/login",
                method: "POST",
                body: credentials,
            }),
        }),
        addNewCatgory: builder.mutation({
            query: (categoryData) => ({
                url: "/product/category/add",
                method: "POST",
                body: categoryData,
            })
        }),
        addNewProduct: builder.mutation({
            query: (productData) => ({
                url: "/product/add",
                method: "POST",
                body: productData,
            })
        }),
        getAllCategory: builder.query({
            query: () => "/product/category/all",
            providesTags: ['Post']
        })
    })
})

export const {useLoginMutation, useAddNewCatgoryMutation, useGetAllCategory} = blueBreedAdminApi;
