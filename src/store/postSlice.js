import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: null
}

// 2 reducers:to add and delete the posts

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.posts =action.payload
        },
        addPost: (state, action) => {
            state.post = action.payload
            state.posts.push(state.post)
        },
        deletePost: (state, action) => {
            state.post = action.payload.post
            state.posts.filter(post => post.$id !== action.payload.post.$id)
        }
    }
})


export const { addPosts, addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;