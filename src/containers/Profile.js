import React, {Component} from 'react';
import PropTypes from "prop-types";
import {changeRoute} from "../actions/routerActions";
import {connect} from "react-redux";
class Profile extends Component {
    componentDidMount() {
        const {changeRoute,navigation}=this.props;
        navigation.addListener('willFocus', payload => {
                changeRoute(payload.state.routeName)
            }
        );
    }

    render() {
        return null
    }
}
Profile.propTypes={
    changeRoute:PropTypes.func,
};

const mapStateToProps = null;

const mapDispatchToProps = {
    changeRoute
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);