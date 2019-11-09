import React, {Component} from 'react';

import {View} from "react-native";
import {connect} from "react-redux";
import {logout} from "../actions/userActions";
import PropTypes from "prop-types";
import LogOut from "./Auth/LogOut";
class HomeScreen extends Component {
    state = {};

    render() {
            return (
                <View>
                    <LogOut logout={this.props.logout}/>
                </View>
            );
        }

}

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = {
    logout
};
HomeScreen.propTypes={
    logout:PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
