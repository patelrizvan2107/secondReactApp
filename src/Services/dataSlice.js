import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const dataSlice = createApi({
    reducerPath: "dataSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts : builder.query({
            query: () => "/posts"
        }),
        createPost : builder.mutation({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            })
        })
    })
})

export const { useGetPostsQuery, useCreatePostMutation } = dataSlice