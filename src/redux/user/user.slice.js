import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { getCookie, removeCookies, setCookies } from "cookies-next";

export const createCustomer = createAsyncThunk(
  "users/createCustomer",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  currentUser: null,

  loginError: null,
  loginLoading: false,
  registerError: null,
  registerLoading: false,

  redirect: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOutUser: (state, action) => {
      removeCookies("accessToken");
      return { ...initialState };
    },
    setRedirectFalse: (state, action) => {
      state.loginLoading = false;
      state.registerLoading = false;
      state.redirect = false;
    },
    signInUser: (state, action) => {
      const accessToken = getCookie("accessToken");
      state.currentUser = jwt_decode(accessToken);
    },

    signInWithEmail_start: (state, action) => {
      state.loginLoading = true;
    },
    signInWithEmail_success: (state, action) => {
      state.currentUser = action.payload;
      state.redirect = true;
    },
    signInWithEmail_failed: (state, action) => {
      state.loginError = action.payload;
      state.loginLoading = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(createCustomer.pending, (state, action) => {
      state.registerLoading = true;
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      // Add user to the state array
      const { data } = action.payload;

      setCookies("accessToken", data.jwt, {
        sameSite: true,
        maxAge: 60 * 60 * 24 * 14,
      });
      state.currentUser = jwt_decode(data.jwt);

      state.redirect = true;
    });
    builder.addCase(createCustomer.rejected, (state, action) => {
      console.log(action.payload);

      if (action.payload?.error?.code === "registration-error-email-exists") {
        state.registerError = "userExists"; // account already exists
      } else {
        state.registerError = action.error.code;
      }

      state.registerLoading = false;
    });
  },
});

export const {
  signOutUser,
  setRedirectFalse,
  signInUser,
  signInWithEmail_start,
  signInWithEmail_failed,
  signInWithEmail_success,
} = userSlice.actions;

export default userSlice.reducer;
