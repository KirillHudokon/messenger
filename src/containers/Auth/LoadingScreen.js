import React, {Component} from 'react';
import {View,Text} from 'react-native'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import fire from "../../config/Fire";
import {changeRoute} from "../../actions/routerActions";

class LoadingScreen extends Component {

    componentDidMount() {
        const {navigation,changeRoute}=this.props;
        navigation.addListener('willFocus', payload => {
                changeRoute(payload.state.routeName)
            }
        );
        fire.auth().onAuthStateChanged(user => {
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
    router:PropTypes.object
};
const mapStateToProps = state => ({
    user: state.user,
    router:state.router
});

const mapDispatchToProps = {
    changeRoute
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingScreen);
