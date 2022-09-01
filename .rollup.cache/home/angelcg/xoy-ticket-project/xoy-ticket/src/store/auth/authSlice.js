import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    status: 'checking',
    user: null,
    errorMessage: null,
    token: null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload.user;
            state.token = payload.token;
        },
        sendErrorMessage: (state, { payload }) => {
            state.errorMessage = payload;
        },
        logout: (state) => {
            state.status = 'not-authenticated';
            state.user = null;
            state.errorMessage = null;
            state.token = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    }
});
// Action creators are generated for each case reducer function
export const { login, sendErrorMessage, logout, checkingCredentials } = authSlice.actions;
//# sourceMappingURL=authSlice.js.map