import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/auth.resp';
interface AuthState {
    status: 'checking' | 'not-authenticated' | 'authenticated';
    errorMessage: string | null;
    user: User | null;
}
const initialState: AuthState = {
    status: 'checking',
    user: null,
    errorMessage: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state: AuthState, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
        },

        sendErrorMessage: (state: AuthState, { payload }) => {
            state.errorMessage = payload;
        },

        logout: (state: AuthState) => {
            state.status = 'not-authenticated';
            state.user = null;
            state.errorMessage = null;
        },

        checkingCredentials: (state: AuthState) => {
            state.status = 'checking';
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, sendErrorMessage, logout, checkingCredentials } = authSlice.actions;