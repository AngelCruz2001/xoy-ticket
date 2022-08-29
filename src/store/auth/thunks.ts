
import { Dispatch } from 'redux';
import axios from 'axios';
import xoyApi from '../../api/xoyApi';
import { login, logout } from './authSlice';
import { Auth } from '../../interfaces/auth.resp';

type DataUser = {
    correo: string;
    contrasena: string;
}

export const startLogin = (dataUser: DataUser) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await xoyApi.post<Auth>('/auth/login/', dataUser);
            localStorage.setItem('token', data.token);
            // dispatch(login(data.));
        } catch (error: any) {
            console.log("Response API", error)
            console.log(error.response.detail);
        }
    };
};