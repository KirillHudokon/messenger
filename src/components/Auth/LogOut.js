import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
const deviceWidth = Dimensions.get('window').width;
class LogOut extends Component {

    render() {
        const {logout} =this.props;
        return (
            <View style={styles.logOutLine}>
                <TouchableOpacity style={styles.logOutButton} onPress={logout}>
                    <Text style={styles.logOutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logOutLine:{
        alignItems: 'center',
        marginBottom:35,
        marginTop:26,
    },
    logOutButton:{
        backgroundColor:'red',
        width: deviceWidth * .45,
        borderColor:'white',
        borderWidth:1,
        borderRadius:5,
        padding:5
    },
    logOutText:{
        fontSize:18,
        textAlign: 'center',
        color:'white'
    }
});
LogOut.propTypes={
    logout: PropTypes.func,
};

export default LogOut;
