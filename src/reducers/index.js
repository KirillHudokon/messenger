import {combineReducers} from 'redux'
import {userReducer} from "./user";
import {routerReducer} from "./router";
import {chatReducer} from "./chat";

export const rootReducer = combineReducers({
    user:userReducer,
    router:routerReducer,
    chat:chatReducer
});