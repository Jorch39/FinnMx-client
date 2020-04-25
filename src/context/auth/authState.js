import { SUCCESFUL_REGISTER, ERROR_REGISTER, GET_USER, SUCCESFUL_LOGIN, ERROR_LOGIN, LOGOUT } from '../../types';
import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clientAxios from '../../config/axios'
import authToken from '../../config/token';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        msg: null,
        loading: true
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Registra usuario
    const registerUser = async data => {
        try {
            const response = await clientAxios.post('/api/users', data)
            console.log(response.data)

            if (response.data.token) {
                const res = await clientAxios.post('/api/forms')
                console.log(res, 'New form created')
            }

            dispatch({
                type: SUCCESFUL_REGISTER,
                payload: response.data
            })

            authenticatedUser();

        } catch (error) {
            // console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg,
                cat: 'alerta-error'
            }

            dispatch({
                type: ERROR_REGISTER,
                payload: alert
            })
        }
    }

    // Usuario autenticado
    const authenticatedUser = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            //Función para enviar el token por headers 
            authToken(token);
        }

        try {
            const response = await clientAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })

        } catch (error) {
            dispatch({
                type: ERROR_LOGIN
            })
        }
    }

    //Cuando el usuario inicia sesión
    const login = async data => {
        try {
            const response = await clientAxios.post('/api/auth', data);
            dispatch({
                type: SUCCESFUL_LOGIN,
                payload: response.data
            })

            authenticatedUser();

        } catch (error) {
            console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg,
                cat: 'alerta-error'
            }

            dispatch({
                type: ERROR_LOGIN,
                payload: alert
            })
        }
    }

    //Cierra sesión
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <authContext.Provider value={{
            token: state.token,
            authenticated: state.authenticated,
            user: state.user,
            msg: state.msg,
            loading: state.loading,
            registerUser,
            authenticatedUser,
            login,
            logout
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;