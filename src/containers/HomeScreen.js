import React, {Component} from 'react';
import {View, Text, ScrollView,StyleSheet, Dimensions,TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ProfileChatImage from "../components/ProfileChatImage";
import {changeRoute,searchUserAction} from "../actions/routerActions";
const deviceWidth = Math.round(Dimensions.get('window').width);
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings([
    'Remote debugger is in a background tab which may cause apps to perform slowly',
    'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground.'
]);

class HomeScreen extends Component {
    static navigationOptions = {
        header:null
    };
    state = {
    };
    componentDidMount() {
        const {navigation,changeRoute}=this.props;
        navigation.addListener(
            'willFocus',
            payload => {
                changeRoute(payload.state.routeName)
            }
        );
    }

    renderFoundedUsers(){
        const {foundedUsers}=this.props;
        if(foundedUsers.length){
            let userView=foundedUsers.map(user => {
                return(
                    <View key={user.uid}>
                        <Text>{user.uid}</Text>
                    </View>
                )
            });
            return <ScrollView>
                {userView}
            </ScrollView>
        }else{
            return <View style={styles.warningNoChats}>
                <Text style={styles.warningTextNoChats}>Ничего не найдено</Text>
            </View>
        }
    }
    render() {
        const {navigation,changeRoute,text}=this.props;
        if(text.length) {
            return this.renderFoundedUsers()
        }
        return this.state.x ? <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.chat} onPress={()=>navigation.push("Chat",{changeRoute, loh:'1'})}>
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
    },
    searchIcon:{
        flex:1,
        padding: 10,
        color:'black'
    },
    searchSection:{
        width:deviceWidth*.95,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height:'70%'
    },
    searchInput: {
        flex:10,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        color: '#424242',
        fontSize:16,
        alignItems: 'center',
        height:'100%',
        justifyContent:'center',
    }
});
HomeScreen.propTypes={
    changeRoute:PropTypes.func,
    user: PropTypes.object,
    text:PropTypes.string,
    foundedUsers:PropTypes.array
};

const mapStateToProps = state => ({
    user: state.user,
    text: state.router.text,
    foundedUsers:state.router.foundedUsers
});

const mapDispatchToProps = {
    changeRoute,
    searchUserAction
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
