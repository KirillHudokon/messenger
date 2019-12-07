import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {searchUserAction} from '../actions/routerActions'
import {connect} from "react-redux";
import {View, Text, TextInput, Dimensions, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const deviceWidth = Math.round(Dimensions.get('window').width);
class NavigationHeader extends Component {
    renderNavigationHeader(){
        const {route,text,searchUserAction}= this.props;
        switch (route) {
            case 'AuthLoading':
            case 'Login':
            case 'Register':
            case 'Chat':
                return null;
            case 'Chats':
                return (
                    <View style={styles.headerSection}>
                        <View style={styles.headerContainer}>
                            <Icon style={styles.searchIcon} name="search" size={20}/>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search for people"
                                onChangeText={(searchText)=>searchUserAction(searchText)}
                                value={text}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                );
            case 'Settings':
            case 'Profile':
                return( <View style={styles.headerSection}>
                    <Text style={styles.route} >
                        {route}
                    </Text>
                </View>
                );
            default:
                return null
        }
    }
    render() {
        return this.renderNavigationHeader()
    }
}
const styles = StyleSheet.create({
    searchIcon:{
        flex:1,
        padding: 10,
        color:'#717171'
    },
    headerContainer:{
        width:deviceWidth*.96,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height:'75%',
        borderRadius:3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    headerSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:48,
        backgroundColor: '#1093ff'
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
    },
    route:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
NavigationHeader.propTypes={
    route:PropTypes.string,
    text:PropTypes.string,
    searchUserAction:PropTypes.func,
};

const mapStateToProps = state => ({
    route:state.router.route,
    text:state.router.text
});

const mapDispatchToProps = {
    searchUserAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationHeader);