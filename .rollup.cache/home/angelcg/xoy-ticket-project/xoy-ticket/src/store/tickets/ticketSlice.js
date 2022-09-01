import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    errorMessage: null,
    tickets: null,
};
export const ticketSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTickets: (state, action) => {
            state.tickets = action.payload;
        },
        clearTickets: (state) => {
            state = initialState;
        }
    }
});
// Action creators are generated for each case reducer function
export const { setTickets } = ticketSlice.actions;
//# sourceMappingURL=ticketSlice.js.map