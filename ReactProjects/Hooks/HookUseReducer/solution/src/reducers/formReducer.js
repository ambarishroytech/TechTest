import { FORM_ACTION_TYPES } from "./formActionTypes";

export const INITIAL_FORM_STATE = {
    title: '',
    desc: '',
    price: 0,
    category: '',
    tags: [],
    images: {
        sm: '',
        md: '',
        lg: '',
    },
    quantity: 0,
}

export const formReducer = (state, action) =>{
    switch(action.type){
        case FORM_ACTION_TYPES.CHANGE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case FORM_ACTION_TYPES.ADD_TAG:
            return {
                ...state,
                tags: [...state.tags, action.payload]
            };
        case FORM_ACTION_TYPES.REMOVE_TAG:
        return {
            ...state,
            tags: state.tags.filter((tag) => tag !== action.payload)
        };
        case FORM_ACTION_TYPES.INCREASE_QTY:
            return {
                ...state,
                quantity: state.quantity + 1
            };
        case FORM_ACTION_TYPES.DECREASE_QTY:
            return { 
                ...state, 
                quantity: state.quantity - 1 
            };
        case FORM_ACTION_TYPES.RESET_FORM:
            action.ref.current.value = '';
            return {
                title: '',
                desc: '',
                price: 0,
                category: '',
                tags: [],
                images: {
                    sm: '',
                    md: '',
                    lg: '',
                },
                quantity: 0,
            };
        default:
            return state;
    }
}