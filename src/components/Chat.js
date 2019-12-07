import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions,TextInput} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const deviceWidth = Math.round(Dimensions.get('window').width);
class Chat extends Component {
   static navigationOptions = ({ navigation }) => {
        return {
            title:'заглушка',
            headerLeft: () => (
                <TouchableOpacity
                    style={styles.backButtonContainer}
                    onPress={()=>navigation.navigate('Chats')}

                >
                    <Icon name="arrow-left" size={25}/>
                </TouchableOpacity>
            ),
        };
    };
    componentDidMount() {
        const {navigation}=this.props;
        const changeRoute = navigation.getParam('changeRoute',null);
        navigation.addListener(
            'willFocus',
            payload => {
                changeRoute(payload.state.routeName)
            }
        );
    }
    state={
        text:''
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.messages}>
                        <View style={styles.myMessage}>
                            <View style={styles.myContent}>
                                <Text style={styles.myText}>
                                    asfkdhsakfhsakdfjhasdffsadfsadfsafsadfdsfasdfsdafsadfsadf
                                </Text>
                                <View style={styles.myData}>
                                    <Text style={styles.myDate}>19:01</Text>
                                    <Icon style={styles.statusMessage} name="arrow-left" size={12}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.anotherUserMessage}>
                            <View style={styles.anotherUserContent}>
                                <Text style={styles.anotherUserText}>
                                    asfkdhsakfhsakdfjhasdffsadfsadfsafsadfdsfasdfsdafsadfsadf
                                </Text>
                                <View style={styles.anotherUserData}>
                                    <Text style={styles.anotherUserDate}>19:01</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myMessage}>
                            <View style={styles.myContent}>
                                <Text style={styles.myText}>
                                    asfkdhsakfhsakdfjhasdffsadfsadfsafsadfdsfasdfsdafsadfsadf
                                </Text>
                                <View style={styles.myData}>
                                    <Text style={styles.myDate}>19:01</Text>
                                    <Icon style={styles.statusMessage} name="arrow-left" size={12}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.anotherUserMessage}>
                            <View style={styles.anotherUserContent}>
                                <Text style={styles.anotherUserText}>
                                    asfkdhsakfhsakdfjhasdffsadfsadfsafsadfdsfasdfsdafsadfsadf
                                </Text>
                                <View style={styles.anotherUserData}>
                                    <Text style={styles.anotherUserDate}>19:01</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myMessage}>
                            <View style={styles.myContent}>
                                <Text style={styles.myText}>
                                    asfkdhsakfhsakdfjhasdffsadfsadfsafsadfdsfasdfsdafsadfsadf
                                </Text>
                                <View style={styles.myData}>
                                    <Text style={styles.myDate}>19:01</Text>
                                    <Icon style={styles.statusMessage} name="arrow-left" size={12}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.anotherUserMessage}>
                            <View style={styles.anotherUserContent}>
                                <Text style={styles.anotherUserText}>
                                    asfkdhsakfhsakdfjhasdffsadfsadfsafsadfdsfasdfsdafsadfsadf
                                </Text>
                                <View style={styles.anotherUserData}>
                                    <Text style={styles.anotherUserDate}>19:01</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myMessage}>
                            <View style={styles.myContent}>
                                <Text style={styles.myText}>
                                    asfkdhsakfhsakdfjhasdffsadfsadfsafsadfdsfasdfsdafsadfsadf
                                </Text>
                                <View style={styles.myData}>
                                    <Text style={styles.myDate}>19:01</Text>
                                    <Icon style={styles.statusMessage} name="arrow-left" size={12}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.anotherUserMessage}>
                            <View style={styles.anotherUserContent}>
                                <Text style={styles.anotherUserText}>
                                    asfkdhsakfhsakdfjhasdffsadfsadfsafsadfdsfasdfsdafsadfsadf
                                </Text>
                                <View style={styles.anotherUserData}>
                                    <Text style={styles.anotherUserDate}>19:01</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.displayButton}>
                        <Icon name="upload" size={25}/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.inputMessage}
                        placeholder="Message..."
                        onChangeText={(searchText)=>this.setState({searchText})}
                        value={this.state.text}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={styles.displayButton}>
                        <Icon name="paper-plane" size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    backButtonContainer:{
        width:50,
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:10,
        paddingRight:10
    },
    myMessage:{
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    myContent:{
        width:deviceWidth*0.7,
        backgroundColor: '#1093ff',
        borderRadius:10,
        marginBottom:6,
        marginTop:6,
        marginRight:5,
        padding:5
    },
    myText:{
        color:'white',
        fontSize:15
    },
    myData:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    myDate:{
        color: 'white',
        marginRight: 7
    },
    statusMessage:{
        color:'white',
        marginRight:7
    },
    anotherUserMessage:{
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    anotherUserContent:{
        width:deviceWidth*0.7,
        backgroundColor: '#d2d2d2',
        borderRadius:10,
        marginBottom:6,
        marginTop:6,
        marginLeft:5,
        padding:5
    },
    anotherUserText:{
        color:'black',
        fontSize:15
    },
    anotherUserData:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    anotherUserDate:{
        color: 'black',
        marginRight: 7
    },
    inputContainer:{
        width:'100%',
        height: 50,
        backgroundColor:'#e5e5e5',
        borderTopWidth:1,
        borderTopColor:'#7d7d7d',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    inputMessage: {
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#424242',
        fontSize:16,
        alignItems: 'center',
        height:'80%',
        backgroundColor:'#c0c0c0',
        borderRadius:10,
        justifyContent:'center',
        width:deviceWidth-100,
    },
    displayButton:{

        width:50,
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
});
export default Chat;
