import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'unauthenticated', // 'checking' | 'authenticated' | 'unauthenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
        },
        logout: (state) => {
            state.status = 'unauthenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        // setError: (state, action) => {
        //     state.errorMessage = action.payload;
        // },
        // clearError: (state) => {
        //     state.errorMessage = null;
        // },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;