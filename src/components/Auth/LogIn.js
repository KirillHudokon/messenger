import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ImageBackground, StyleSheet, Text, View,TouchableOpacity, TextInput, Dimensions} from "react-native";
const deviceWidth = Dimensions.get('window').width;
class LogIn extends Component {
    state = {
        email:'',
        password:'',
    };
    changeState=key=>val=>{
        this.setState({[key]:val})
    };
    render() {
        console.log(this.state);
        return (
            <ImageBackground
                style={{
                    backgroundColor: '#ccc',
                    flex: 1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    recizeMode:'cover',

                }}
                source={require('../../assets/180734.jpg')}
            >
                <View style={styles.mainBlock} onPress={this.props.flagChanger}>
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputsAndIconSupBlock}>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor="white"
                                style={styles.input}
                                value={this.state.email}
                                onChangeText={this.changeState('email')}

                            />
                        </View>
                        <View style={styles.inputsAndIconSupBlock}>
                            <TextInput
                                secureTextEntry={true}
                                placeholder='Password'
                                placeholderTextColor="white"
                                style={styles.input}
                                value={this.state.password}
                                onChangeText={this.changeState('password')}
                            />
                        </View>
                    </View>
                    <View style={styles.authLine}>
                        <TouchableOpacity style={styles.authButton}>
                            <Text style={styles.authText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style='registerBlock' onPress={this.props.flagChanger}>
                        <Text style={styles.registerText}>Don't have an account?</Text>
                        <Text style={styles.registerText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    mainBlock: {
        flex: 1
    },
    title:{
        color:'white',
        fontSize:30,
        marginTop:30,
        marginLeft:25,
        marginBottom:130,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    inputsContainer:{
        alignItems: 'center',
        marginBottom: 35,
    },
    input:{
        marginBottom:5,
        width:deviceWidth * .86,
        borderBottomWidth:1,
        borderBottomColor:'white',
        color:'white',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    },
    registerBlock:{

    },
    registerText:{
        textAlign:'center',
        color:'white',
        fontSize: 15
    },
    inputsAndIconSupBlock:{
    },
    authLine:{
        alignItems: 'center',
        marginBottom:35
    },
    authButton:{
        width: deviceWidth * .45,
        borderColor:'white',
        borderWidth:1,
        borderRadius:5,
        padding:5
    },
    authText:{
        fontSize:18,
        textAlign: 'center',
        color:'white'
    }
});
LogIn.propTypes = {
    flagChanger: PropTypes.func,
};

LogIn.defaultProps = {
    flagChanger: () => {},
};

export default LogIn;
