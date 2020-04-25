import { SHOW_FORM, GET_FORM, ADD_FORM, FORM_ERROR, VALIDATE_FORM, ACTUAL_FORM, DELETE_FORM, UPDATE_FORM } from '../../types';


export default (state, action) => {
    switch (action.type) {
        case SHOW_FORM:
            return {
                ...state,
                formulary: true
            }
        case UPDATE_FORM:
        case GET_FORM:
            return {
                ...state,
                form: action.payload
            }
        case ADD_FORM:
            return {
                ...state,
                forms: [...state.forms, action.payload],
                formulary: false,
                formerr: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                formerr: true
            }
        case ACTUAL_FORM:
            return {
                ...state,
                form: state.form.filter(form => form._id === action.payload)
            }
        case DELETE_FORM:
            return {
                ...state,
                forms: state.forms.filter(form => form._id !== action.payload),
                form: null
            }
        case FORM_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state;
    }
}