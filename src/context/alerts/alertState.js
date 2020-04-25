import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from '../../types';

const AlertState = props => {
    const intialState = {
        alert:null
    }

    const [state, dispatch] = useReducer(alertReducer, intialState)

    //Funciones 
    const showAlert = (msg, cat) => {
        dispatch({
            type: SHOW_ALERT, 
            payload: {
                msg,
                cat
            }
        })

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 5000);
    }

    return (
        <alertContext.Provider value={{ alert: state.alert, showAlert }}>
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;