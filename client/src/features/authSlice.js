import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../api";

const initialState = {
  authData: null,
  loading: false,
  error: null,
  success: false,
};

export const auth = createAsyncThunk("authPost", async (action) => {
  localStorage.setItem("profile", JSON.stringify({ ...action }));
  return action;
});

export const signin = createAsyncThunk("signin", async (formData) => {
  const { data } = await signIn(formData);
  localStorage.setItem("profile", JSON.stringify({ data }));
  return data;
});

export const signup = createAsyncThunk("signup", async (formData) => {
  const { data } = await signUp(formData);

  localStorage.setItem("profile", JSON.stringify({ data }));
  return data;
});

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.authData = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch posts
    builder.addCase(auth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(auth.fulfilled, (state, action) => {
      state.authData = action.payload;
      state.loading = false;
    });
    builder.addCase(auth.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // Authorization

    // signin

    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // signup

    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
