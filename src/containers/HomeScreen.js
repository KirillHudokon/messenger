import React, {Component} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet, Dimensions,TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ProfileChatImage from "../components/ProfileChatImage";
import Icon from 'react-native-vector-icons/FontAwesome';
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Chats',
    };
    state = {
        x:false
    };
    render() {
        return this.state.x ? <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search for people"
                    style={styles.search}
                />
            </View>
            <TouchableOpacity style={styles.chat}>
                <View style={styles.imageContainer}>
                    <ProfileChatImage/>
                    <View style={styles.online}/>
                </View>
                <View style={styles.nameAndTextContainer}>
                    <Text style={styles.name}>huy huev</Text>
                    <Text style={styles.text}>lksadfjaskldfhkas</Text>
                </View>
                <View style={styles.dateAndstateOfMessage}>
                    <Text style={styles.date}>15:03</Text>
                    <View style={styles.stateOfMessage_read}/>
                    {/* <View style={styles.stateOfMessage_unread}/>
                            <Icon style={styles.iconStatePositive} size={20} name="angle-down"/>
                            <Icon style={styles.iconStateNegative} size={20} name="times"/>*/}
                </View>
            </TouchableOpacity>
        </ScrollView> : <View style={styles.warningNoChats}>
            <Text style={styles.warningTextNoChats}>
                У вас нет чатов
            </Text>
        </View>
        }

}

const styles = StyleSheet.create({
    searchContainer: {
        width:deviceWidth,
        height:deviceHeight*0.06,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
    },
    search: {
        width:deviceWidth*0.95,
        height:'70%',
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:10,
        paddingRight:0,
        paddingTop:0,
        paddingBottom:0
    },
    imageContainer:{
        marginRight:10,
        position:'relative'
    },
    chat:{
        padding:10,
        flexDirection:'row',
        height:70,
    },
    nameAndTextContainer:{

    },
    name:{
        fontWeight: 'bold',
        fontSize:16
    },
    text:{
        color:'grey'
    },
    dateAndstateOfMessage:{
      flex:1,
      height:'100%',
      justifyContent: 'space-between',
      textAlign: 'right',

    },
    date:{
        fontSize:15,
        textAlign: 'right'
    },
    stateOfMessage_read:{
        backgroundColor:'blue',
        width:10,
        height:10,
        borderRadius:5,
        marginLeft: '95%',
        marginBottom:10,
    },
    stateOfMessage_unread:{
        backgroundColor:'white',
        width:10,
        height:10,
        borderRadius:5,
        marginLeft: '95%',
        marginBottom:10,
        borderWidth:2,
        borderColor:'blue'
    },
    online:{
        backgroundColor:'blue',
        width:10,
        height:10,
        borderRadius:5,
        position: 'absolute',
        top:'75%',
        left:'75%'
    },
    iconStatePositive:{
        marginLeft: '90%',
        marginBottom:10,
        color:'blue'
    },
    iconStateNegative:{
        marginLeft: '90%',
        marginBottom:10,
        color:'red'
    },
    warningNoChats:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    warningTextNoChats:{
        color:'grey',
        fontSize:16
    }
});
HomeScreen.propTypes={
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = null;


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
