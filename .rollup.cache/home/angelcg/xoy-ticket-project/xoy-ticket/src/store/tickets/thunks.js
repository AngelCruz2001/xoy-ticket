import xoyApi from "api/xoyApi";
import { setTickets } from "./ticketSlice";
export const startGetTickets = () => async (dispatch, getState) => {
    const { token } = getState().auth;
    const { data } = await xoyApi.get('transacciones');
    dispatch(setTickets(data.data));
};
//# sourceMappingURL=thunks.js.map