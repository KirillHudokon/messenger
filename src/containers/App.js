import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "./HomeScreen";
import LoadingScreen from "./Auth/LoadingScreen";
import Login from "./Auth/LogIn";
import Register from "./Auth/SignUp";
import {Provider} from 'react-redux'
import {store} from '../store/ConfigureStore'
import Profile from "../components/Profile";
import Settings from "../components/Settings";

const Chats = createStackNavigator({
    Home: HomeScreen
},{
    headerLayoutPreset: 'center'
});

const AuthStack = createStackNavigator({
    Login,
    Register
});

const TabNavigator = createBottomTabNavigator({
    Chats,
    Profile,
    Settings
});

const Navigation = createAppContainer(
    createSwitchNavigator({
            AuthLoading: LoadingScreen,
            Auth: AuthStack,
            Home: TabNavigator,
        },
        {
            initialRouteName: 'AuthLoading',
        })
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