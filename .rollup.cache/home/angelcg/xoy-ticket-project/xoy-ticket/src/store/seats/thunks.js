import xoyApi from "api/xoyApi";
import { setSeats } from "./seatsSlice";
export const startGetSeats = (idTransaction) => {
    return async (dispatch, getState) => {
        const { token } = getState().auth;
        try {
            const { data } = await xoyApi.get(`transaccion/${idTransaction}`);
            dispatch(setSeats(data.data));
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    };
};
//# sourceMappingURL=thunks.js.map