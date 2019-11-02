import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import FlipCard from './Flip/FlipCard'
import LogIn from "./Auth/LogIn";
import SignUp from "./Auth/SignUp";

class AuthScreen extends Component {
    static defaultProps = {};
    static navigationOptions = {
        header: null,
    };
    static propTypes = {};

    state = {
        flag:false
    };
    changeState=()=>{
        this.setState({flag:!this.state.flag})
    };

    render() {
        console.log(this.state.flag);
        return (
            <FlipCard
                style={styles.card}
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
                flag={this.state.flag}
            >
                <LogIn flagChanger={this.changeState} />
                <SignUp flagChanger={this.changeState}/>
            </FlipCard>
        );
    }
}
const styles = StyleSheet.create({
    card:{
        width:'100%',
    },
    mainBlock: {
        width:50,
        height:50,
        backgroundColor:'powderblue'
    }
});

export default AuthScreen;
