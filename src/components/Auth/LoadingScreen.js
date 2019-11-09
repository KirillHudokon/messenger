import React, {Component} from 'react';
import {View,Text} from 'react-native'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import fire from "../../config/Fire";

class LoadingScreen extends Component {

    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'App' : 'Auth')
        })
    }
    render() {

        return (
            <View>
               <Text>
                   Loading...
               </Text>
            </View>
        );
    }
}

LoadingScreen.propTypes={
    userListener:PropTypes.func
};
const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingScreen);
