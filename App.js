import React from 'react';
import { createAppContainer,createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/components/HomeScreen";
import LoadingScreen from "./src/components/LoadingScreen";
import AuthScreen from "./src/components/AuthScreen";
const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ SignIn: AuthScreen });

export default createAppContainer(
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

