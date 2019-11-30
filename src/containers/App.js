import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "./HomeScreen";
import LoadingScreen from "./Auth/LoadingScreen";
import Login from "./Auth/LogIn";
import Register from "./Auth/SignUp";
import {Provider} from 'react-redux'
import {store} from '../store/ConfigureStore'
import Profile from "./Profile";
import Settings from "./Settings";
import NavigationHeader from "./NavigationHeader";
import Icon from "react-native-vector-icons/FontAwesome";
const Chats = createStackNavigator({
    Chats: HomeScreen
},{
    headerLayoutPreset: 'center',
});

const AuthStack = createStackNavigator({
    Login,
    Register
});

const TabNavigator = createMaterialTopTabNavigator({
    Chats:{
        screen:Chats,
        navigationOptions:()=>({
            tabBarIcon: ({tintColor}) =>{
                return <Icon name="comments" size={28}  style={{color:tintColor}}/>
            }
        })
    },
    Profile:{
        screen:Profile,
        navigationOptions:()=>({
            tabBarIcon: ({tintColor}) =>{
                return <Icon name="user" size={28} style={{color:tintColor}}/>
            }
        })
    },
    Settings:{
        screen:Settings,
        navigationOptions:()=>({
            tabBarIcon: ({tintColor}) =>{
                return <Icon name="cog" size={26}  style={{color:tintColor}}/>
            }
        })
    }
},{
    lazy:true,
    tabBarOptions: {
        activeTintColor :'white',
        inactiveTintColor:'white',
        tintColor:'white',
        showLabel: false,
        style: {
            backgroundColor: '#1093ff',
        },
        indicatorStyle: {
            backgroundColor: 'transparent'
        },
        showIcon: true
    }
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
                <NavigationHeader/>
                <Navigation />
            </Provider>
        );
    }
}