import { SUCCESFUL_REGISTER, ERROR_REGISTER, GET_USER, SUCCESFUL_LOGIN, ERROR_LOGIN, LOGOUT } from '../../types';


export default (state, action) => {
    switch(action.type) {
        case SUCCESFUL_REGISTER:
        case SUCCESFUL_LOGIN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state, 
                authenticated: true, 
                msg: null, 
                loading: false
            }
        case GET_USER: 
            return {
                ...state,
                authenticated: true, 
                user: action.payload,
                loading: false
            }
        case LOGOUT:
        case ERROR_LOGIN:
        case ERROR_REGISTER:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null, 
                user: null,
                authenticated: null,
                msg: action.payload, 
                loading: false
            }

        default:
            return state;
    }
}


