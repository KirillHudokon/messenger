import React, {Component} from 'react';
import {View,Text} from 'react-native'

class LoadingScreen extends Component {
    state = {};

    componentDidMount() {
        this.redir();
    }

    // Fetch the token from storage then navigate to our appropriate place
    redir = () => {
        let user=false;
        this.props.navigation.navigate(user ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {

        return (
            <View>
               <Text>
                   load
               </Text>
            </View>
        );
    }
}

export default LoadingScreen;
