import {
    CHANGE_ROUTE,
    CHANGE_USER_SEARCH_TEXT,
    SEARCH_USER_FAIL,
    SEARCH_USER_REQUEST,
    SEARCH_USER_SUCCESS
} from '../actions/routerActions'
const initialState = {
    route:'',
    text:'',
    loading:false,
    foundedUsers:[],
    error:''
};
export function routerReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_ROUTE:
            return { ...state, route:action.payload};
        case CHANGE_USER_SEARCH_TEXT:
            return { ...state, text:action.payload};
        case SEARCH_USER_REQUEST:
            return { ...state, loading:true, error: '' };
        case SEARCH_USER_SUCCESS:
            return { ...state, loading:false, foundedUsers: action.payload, error: ''};
        case SEARCH_USER_FAIL:
            return { ...state, loading:false, error: action.payload };
        default:
            return state
    }
}