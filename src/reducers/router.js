import {
    CHANGE_ROUTE,
} from '../actions/routerActions'
const initialState = {
    route:'',
};
export function routerReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_ROUTE:
            return { ...state, route:action.payload};
        default:
            return state
    }
}