import React, {Component} from 'react';
import PropTypes from "prop-types";
import {changeRoute} from "../actions/routerActions";
import {connect} from "react-redux";
class Profile extends Component {
    componentDidMount() {
        const {changeRoute}=this.props;
        this.props.navigation.addListener('willFocus', payload => {
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
    router:PropTypes.object,
};

const mapStateToProps = state => ({
    router:state.router
});

const mapDispatchToProps = {
    changeRoute
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);