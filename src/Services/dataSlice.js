import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const dataSlice = createApi({
    reducerPath: "dataSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts"
        }),
        createPost: builder.mutation({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            })
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => [{ type: "Post", id }],
        }),
        updatePost: builder.mutation({
            query: (id) =>( {
                url: `/posts/${id}`,
                method: "PUT",
            })
        })
    })
})

export const { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = dataSlice