import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions} from "react-native";
import {registerAction} from "../../actions/userActions";
import {changeRoute} from "../../actions/routerActions";
import {connect} from "react-redux";
const deviceWidth = Dimensions.get('window').width;
class SignUp extends Component {
    static navigationOptions = {
        header: null,
    };
    componentDidMount() {
        const {changeRoute,navigation} = this.props;
        navigation.addListener(
            'willFocus',
            payload => {
                changeRoute(payload.state.routeName)

            }
        )
    }

    state = {
        email:'',
        login:'',
        password:'',
    };
    changeState=key=>val=>{
        this.setState({[key]:val})
    };
    reg=()=>{
        const {email,login,password}=this.state;
        const {registerAction}=this.props;
        registerAction(email,password,login)
    };
    render() {
        const {user,navigation}=this.props;
        const {email,login,password}=this.state;
        const load = user.loading ? <View style={styles.loadBlock}>
            <Text style={styles.loadText}>Loading...</Text>
        </View> : null;

        const fail= user.error ? <View style={styles.errorBlock}>
            <Text style={styles.errorText}>{user.error}</Text>
        </View> : null;
        return (
            <View style={styles.mainBlock}>
                <Text style={styles.title}>
                    Registration
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
                        <Text style={styles.inputTitle}>Login</Text>
                        <TextInput
                            style={styles.input}
                            value={login}
                            onChangeText={this.changeState('login')}
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
                    <TouchableOpacity style={styles.authButton} onPress={this.reg}>
                        <Text style={styles.authText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style='registerBlock' onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.registerText}>Do you have an account?</Text>
                    <Text style={styles.registerTextNavigate}>Login</Text>
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
SignUp.propTypes = {
    registerAction:PropTypes.func,
    changeRoute:PropTypes.func,
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    user: state.user,
});
const mapDispatchToProps = {
    registerAction,
    changeRoute
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

