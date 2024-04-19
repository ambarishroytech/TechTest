import { POST_ACTION_TYPES } from "./postActionTypes"

export const INITIAL_POST_STATE = {
    posting: false,
    error: false,
    postResult: null,
}

export const postReducer = (state, action) => {
    switch (action.type) {
        case POST_ACTION_TYPES.POST_START:
            return {
                posting: true,
                error: false,
                postResult: null
            }
        case POST_ACTION_TYPES.POST_SUCCESS:
            return {
                posting: false,
                error: false,
                postResult: action.payload,
            }
        case POST_ACTION_TYPES.POST_ERROR:
            return {
                posting: false,
                error: true,
                postResult: null
            }
        default:
            return state;
    }

}
