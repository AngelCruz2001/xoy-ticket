import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    seats: null,
};
export const seatsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSeats: (state, action) => {
            state.seats = action.payload;
        },
        clearSeats: (state) => {
            state = initialState;
        }
    }
});
// Action creators are generated for each case reducer function
export const { setSeats } = seatsSlice.actions;
//# sourceMappingURL=seatsSlice.js.map