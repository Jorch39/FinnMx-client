import React, { useReducer } from 'react';
import formContext from './formContext';
import formReducer from './formReducer';
import clientAxios from '../../config/axios';
import { SHOW_FORM, GET_FORM, ADD_FORM, FORM_ERROR, VALIDATE_FORM, ACTUAL_FORM, DELETE_FORM, UPDATE_FORM } from '../../types';

const FormState = props => {

    const initialState = {
        forms: {
            info: null,
            percentage: null,
            term: null,
            options: null,
            value: null,
            risk: null
        },
        formulary: false,
        formerr: false,
        form: {},
        msg: null
    }

    //Dispatch para ejecutar las acciones 
    const [state, dispatch] = useReducer(formReducer, initialState);

    //CRUD
    const showForm = () => {
        dispatch({
            type: SHOW_FORM
        })
    }

    //Agregar nuevo formulario 
    const addForm = async form => {
        try {
            const result = await clientAxios.post('/api/forms', form);
            const { _id } = result.data

            localStorage.setItem('formId', _id);

            return true

        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                cat: 'alerta-error'
            }
            return false

        }
    }

    const updateForm = async (id, form) => {
        try {
            const response = await clientAxios.put(`/api/forms/${id}`, form)
            // console.log(response, 'updateForm')

            dispatch({
                type: UPDATE_FORM,
                payload: response.data.form
            });
            localStorage.setItem('form', JSON.stringify(response.data.form));

            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    //Obtener formulario por id
    const getForms = async (id) => {
        try {
            const result = await clientAxios.get(`/api/forms/${id}`)

            dispatch({
                type: GET_FORM,
                payload: result.data.form
            });
            return true
        } catch (error) {
            return false
            console.log(error)
        }
    }

    //Valida formulario
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    //Selecciona el formulario actual
    const actualForm = formId => {
        dispatch({
            type: ACTUAL_FORM,
            payload: formId
        })
    }

    //Elimina un proyecto
    const deleteForm = async formId => {
        try {
            await clientAxios.delete(`/api/forms/${formId}`);
            dispatch({
                type: DELETE_FORM,
                payload: formId
            })
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                cat: 'alerta-error'
            }
            dispatch({
                type: FORM_ERROR,
                payload: alert
            })
        }
    }

    return (
        <formContext.Provider value={{ forms: state.forms, formulary: state.formulary, formerr: state.formerr, form: state.form, msg: state.msg, showForm, getForms, addForm, showError, actualForm, deleteForm, updateForm }}>
            {props.children}
        </formContext.Provider>
    )
}

export default FormState;