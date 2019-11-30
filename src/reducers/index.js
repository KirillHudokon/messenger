import {combineReducers} from 'redux'
import {userReducer} from "./user";
import {routerReducer} from "./router";

export const rootReducer = combineReducers({
    user:userReducer,
    router:routerReducer
});