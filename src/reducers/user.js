import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    USER_LISTENER_AUTH
} from '../actions/userActions'
const initialState = {
    cred: null,
    error: '',
    loading:false
};
export function userReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading:true, error: '' };
        case LOGIN_SUCCESS:
            return { ...state, loading:false, cred: action.payload,  error: ''};
        case LOGIN_FAIL:
            return { ...state, loading:false, error: action.payload.message };

        case REGISTER_REQUEST:
            return { ...state, loading:true, error: '' };
        case REGISTER_SUCCESS:
            return { ...state, loading:false, cred: action.payload, error: ''};
        case REGISTER_FAIL:
            return { ...state, loading:false, error: action.payload.message };


        case LOGOUT_REQUEST:
            return { ...state, loading:true, error: '' };
        case LOGOUT_SUCCESS:
            return {...initialState};
        case LOGOUT_FAIL:
            return { ...state, loading:false, error: action.payload.message };

        case USER_LISTENER_AUTH:
            return { ...state, loading:false, cred: action.payload, error: ''};

        default:
            return state
    }
}