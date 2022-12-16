import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: null,
};

export const auth = createAsyncThunk("authPost", async (action) => {
  console.log("🚀 ~ file: authSlice.js:8 ~ auth ~ action", action)
  await localStorage.setItem("profile", JSON.stringify({ ...action }));
  return action;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch posts
    builder.addCase(auth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(auth.fulfilled, (state, action) => {
      state.authData = action
      state.loading = false;
    });
    builder.addCase(auth.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
