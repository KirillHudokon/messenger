import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../components/HomeScreen";
import LoadingScreen from "../components/Auth/LoadingScreen";
import Login from "./Auth/LogIn";
import Register from "./Auth/SignUp";
const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({
    Login,
    Register
});
import {Provider} from 'react-redux'
import {store} from '../store/ConfigureStore'
let Navigation = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}