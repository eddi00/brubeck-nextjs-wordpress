import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { removeCookies, setCookies } from "cookies-next";

// First, create the thunk
export const signInWithEmail = createAsyncThunk(
  "users/signInWithEmail",
  async data => {
    console.log(data);
    const response = await axios.post("/api/auth/signIn", data);
    return response.data;
  }
);

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state, action) => {
      removeCookies("accessToken");
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signInWithEmail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInWithEmail.fulfilled, (state, action) => {
      // Add user to the state array
      const { data } = action.payload;
      console.log(action.payload);

      setCookies("accessToken", data.jwt);
      state.currentUser = jwt_decode(data.jwt);
      state.loading = false;
    });
    builder.addCase(signInWithEmail.rejected, (state, action) => {
      console.log(action.error);
      state.error = action.error.code;
      state.loading = false;
    });
  },
});

export const { signOut } = userSlice.actions;

export default userSlice.reducer;
