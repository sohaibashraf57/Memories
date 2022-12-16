import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, createPost, update, deletePos, likePos } from "../api";

const initialState = {
  posts: [],
  error: "",
  loading: false,
};

export const fetchPost = createAsyncThunk("getPosts", async () => {
  const response = await getPosts();
  return response.data;
});

export const addPost = createAsyncThunk("addPost", async (action) => {
  const response = await createPost(action);
  return response.data;
});

export const updatePost = createAsyncThunk("updatePost", async (action) => {
  const { id, postData } = action;
  const response = await update(id, postData);
  return response.data;
});

export const deletePost = createAsyncThunk("deletePost", async (id) => {
  await deletePos(id);
  return id;
});

export const likePost = createAsyncThunk("updatedPost", async (id) => {
  const { data } = await likePos(id);
  return data;
});

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Fetch posts
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    //  Add Post

    builder.addCase(addPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts = [...state.posts, action.payload];
      state.loading = false;
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // Update Post

    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      state.loading = false;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // delete post

    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.loading = false;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // Like Post

    builder.addCase(likePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      state.loading = false;
    });
    builder.addCase(likePost.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = postSlice.actions;

export default postSlice.reducer;
