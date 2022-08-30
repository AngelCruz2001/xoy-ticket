
import { Dispatch } from 'redux';


import Swal from 'sweetalert2'

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
            const { data } = await xoyApi.post<Auth>('auth/login', dataUser);
            localStorage.setItem('token', data.token);
            localStorage.setItem('data', JSON.stringify(data.data));
            dispatch(login(data.data));
        } catch (error: any) {
            console.log(error.response.data.error);
            Swal.fire({
                title: 'Error',
                text: error.response.data.error,
                icon: 'error'
            })
        }
    };
};




export const checkToken = () => {
    return async (dispatch: Dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const data = JSON.parse(localStorage.getItem('data')!);

            // No token, no autenticado
            if (!token || !data) return dispatch(logout());


            dispatch(login(data));

        } catch (error) {
            console.log(error);
        }
    }
}

