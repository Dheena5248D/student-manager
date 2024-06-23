import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState : {
      isAuthenticated: false,
      loading: false,
      user: null,
},
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure: (state, action) => { 
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    clearAuth: (state,action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },

    //register reducers
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    registerFailure: (state, action) => { 
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload.message;
    },
  },
})

export const { loginRequest, loginSuccess, loginFailure, clearAuth, registerRequest, registerSuccess, registerFailure } = authSlice.actions;

export default authSlice.reducer;