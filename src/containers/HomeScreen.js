import React, {Component} from 'react';
import {View} from "react-native";
import {connect} from "react-redux";
import {logout} from "../actions/userActions";
import PropTypes from "prop-types";
import LogOut from "../components/Auth/LogOut";
class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Chats',
    };
    state = {};

    render() {
            return (
                <View>
                    <LogOut logout={this.props.logout}/>
                </View>
            );
        }

}

HomeScreen.propTypes={
    logout:PropTypes.func,
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = {
    logout
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
