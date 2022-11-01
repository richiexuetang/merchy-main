import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string | null;
  email: string;
  following: [];
  first_name: string;
  last_name: string;
}

export interface AuthState {
  token: string;
  user: User;
  isAuthenticated: boolean;
  loading: boolean;
  registerSuccess: boolean;
}

const initialState: AuthState = {
  token: '',
  user: null,
  isAuthenticated: false,
  loading: false,
  registerSuccess: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = '';
    },
    registerSuccess: (state) => {
      state.registerSuccess = true;
    },
    resetRegisterSuccess: (state) => {
      state.registerSuccess = false;
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    loginFail: (state) => {
      state.isAuthenticated = false;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    loadUserSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFail: (state) => {
      state.user = null;
    },
    setAuthLoading: (state) => {
      state.loading = true;
    },
    removeAuthLoading: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setToken,
  removeToken,
  loginSuccess,
  loadUserSuccess,
  loadUserFail,
  loginFail,
  setAuthLoading,
  registerSuccess,
  removeAuthLoading,
  resetRegisterSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
