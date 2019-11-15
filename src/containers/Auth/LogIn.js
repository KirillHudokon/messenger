import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View,TouchableOpacity, TextInput, Dimensions} from "react-native";
const deviceWidth = Dimensions.get('window').width;
import {loginAction,logUserInFacebook,logUserInGitHub} from "../../actions/userActions";
import {connect} from "react-redux";
class LogIn extends Component{

    static navigationOptions = {
        header: null,
    };
    state = {
        email:'',
        password:'',
    };

    changeState=key=>val=>{
        this.setState({[key]:val})
    };
    login=()=>{
        const {loginAction}=this.props;
        const {email,password}=this.state;
        loginAction(email,password)
    };

    render() {
        const {user,navigation,logUserInFacebook,logUserInGitHub}=this.props;
        const {email,password}=this.state;

        const load = user.loading ? <View style={styles.loadBlock}>
            <Text style={styles.loadText}>Loading...</Text>
        </View> : null;

        const fail= user.error ? <View style={styles.errorBlock}>
            <Text style={styles.errorText}>{user.error}</Text>
        </View> : null;

        return (
            <View style={styles.mainBlock}>
                <Text style={styles.title}>
                    Login

                </Text>
                <View style={styles.inputsContainer}>
                    <View style={styles.inputsAndIconSupBlock}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={this.changeState('email')}
                        />
                    </View>
                    <View style={styles.inputsAndIconSupBlock}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            value={password}
                            onChangeText={this.changeState('password')}
                        />
                    </View>
                </View>
                {fail}
                {load}
                <View style={styles.authLine}>
                    <TouchableOpacity style={styles.authButton} onPress={this.login}>
                        <Text style={styles.authText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style='registerBlock' onPress={()=>navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Don't have an account?</Text>
                    <Text style={styles.registerTextNavigate}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style='facebook' onPress={logUserInFacebook}>
                    <Text>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style='facebook' onPress={logUserInGitHub}>
                    <Text>Git</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainBlock: {
        flex: 1,

    },
    title:{
        color:'black',
        fontSize:30,
        marginTop:30,
        marginLeft:25,
        marginBottom:130,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    inputsContainer:{
        alignItems: 'center',
        marginBottom: 15,
    },
    input:{
        width:deviceWidth * .86,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#8A8F9E',
        color:'black',
        height:40
    },
    registerBlock:{

    },
    registerText:{
        textAlign:'center',
        color:'black',
        fontSize: 15
    },
    registerTextNavigate:{
        textAlign:'center',
        color:'blue',
        fontSize: 15
    },
    inputsAndIconSupBlock:{
        marginBottom:20
    },
    authLine:{
        alignItems: 'center',
        marginBottom:35,
        marginTop:26,
    },
    authButton:{
        width: deviceWidth * .85,
        borderColor:'white',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        backgroundColor: 'blue'
    },
    authText:{
        fontSize:18,
        textAlign: 'center',
        color:'white'
    },
    errorBlock:{
        alignItems:'center',
    },
    errorText:{
        color:'red',
        width:deviceWidth * .86,
        fontSize:16
    },
    loadBlock:{
        alignItems:'center',
    },
    loadText:{
        color:'black',
        width:deviceWidth * .86,
        fontSize:16,
        textAlign:'center'
    },
    inputTitle:{
        color:'#8A8F9E',
        fontSize:10,
        textTransform:'uppercase'
    }
});
LogIn.propTypes = {
    loginAction:PropTypes.func,
    logUserInFacebook:PropTypes.func,
    logUserInGitHub:PropTypes.func,
    loading:PropTypes.bool,
    error:PropTypes.string
};

const mapStateToProps = state => ({
    user: state.user,
});
const mapDispatchToProps = {
    loginAction,
    logUserInFacebook,
    logUserInGitHub
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn);

