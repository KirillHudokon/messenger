import React, {Component} from 'react';
import {View,Text} from 'react-native'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import fire from "../../config/Fire";
import {changeRoute} from "../../actions/routerActions";
import {userListener} from "../../actions/userActions";

class LoadingScreen extends Component {

    componentDidMount() {
        const {navigation,changeRoute,userListener}=this.props;
        navigation.addListener('willFocus', payload => {
                changeRoute(payload.state.routeName)
            }
        );
        fire.auth().onAuthStateChanged(user => {
            userListener(user);
            navigation.navigate(user ? 'Home' : 'Auth')
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
    userListener:PropTypes.func,
    changeRoute:PropTypes.func,
    user: PropTypes.object,
};
const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = {
    changeRoute,
    userListener
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingScreen);
