import { configureStore, createSlice } from "@reduxjs/toolkit";

let nextId = 3;
const postSlice = createSlice({
  name: "post",
  initialState: [
    { id: 0, title: "리액트 공부1", content: "열심히 하자" },
    { id: 1, title: "리액트 공부2", content: "파이팅" },
    { id: 2, title: "리액트 공부3", content: "-문건우-" },
  ],
  reducers: {
    addPost(state, action) {
      const newPost = {
        id: nextId++,
        title: action.payload.title,
        content: action.payload.content,
      };
      return [...state, newPost];
    },

    deletePost(state, action) {
      return state.filter((post) => post.id !== action.payload);
    },
    updatePost(state, action) {
      return state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { addPost, deletePost, updatePost } = postSlice.actions;
export const { login, logout } = authSlice.actions;
export default configureStore({
  reducer: {
    posts: postSlice.reducer,
    auth: authSlice.reducer,
  },
});
