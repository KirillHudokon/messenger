import React, {Component} from 'react';
import {View} from "react-native";
import PropTypes from "prop-types";
import {changeRoute} from "../actions/routerActions";
import {logout} from "../actions/userActions";
import {connect} from "react-redux";
import LogOut from "../components/Auth/LogOut";

class Settings extends Component {
    componentDidMount() {
        const {changeRoute,navigation}=this.props;
        navigation.addListener('willFocus', payload => {
                changeRoute(payload.state.routeName)
            }
        );
    }

    render() {
        return (
            <View>
                <LogOut logout={this.props.logout}/>
            </View>
        );
    }
}

Settings.propTypes={
    changeRoute:PropTypes.func,
    logout:PropTypes.func,
};

const mapStateToProps = null;

const mapDispatchToProps = {
    changeRoute,
    logout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);

