import Swal from 'sweetalert2';
import xoyApi from '../../api/xoyApi';
import { login, logout } from './authSlice';
export const startLogin = (dataUser) => {
    return async (dispatch) => {
        try {
            const { data } = await xoyApi.post('auth/login', dataUser);
            localStorage.setItem('token', data.token);
            localStorage.setItem('data', JSON.stringify(data.data));
            dispatch(login({ token: data.token, user: data.data }));
        }
        catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.response.data.error,
                icon: 'error'
            });
        }
    };
};
export const startSignUp = (dataUser) => {
    return async (dispatch) => {
        try {
            const { data } = await xoyApi.post('auth/register', dataUser);
            Swal.fire({
                title: 'Genial',
                text: 'Te has registrado con exito',
                icon: 'success'
            });
            const { data: dataLogin } = await xoyApi.post('auth/login', {
                correo: dataUser.correo,
                contrasena: dataUser.contrasena
            });
            localStorage.setItem('token', dataLogin.token);
            localStorage.setItem('data', JSON.stringify(dataLogin.data));
            dispatch(login({ token: data.token, user: dataLogin.data }));
        }
        catch (error) {
            console.log(error.response.data.error);
            Swal.fire({
                title: 'Error',
                text: error.response.data.error,
                icon: 'error'
            });
        }
    };
};
export const checkToken = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const data = JSON.parse(localStorage.getItem('data'));
            if (token && data) {
                dispatch(login({ token, user: data }));
            }
            if (!token || !data)
                return dispatch(logout());
        }
        catch (error) {
            console.log(error);
        }
    };
};
//# sourceMappingURL=thunks.js.map