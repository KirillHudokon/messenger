import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from "react-native";
class ProfileChatImage extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    renderAnotherUserImage(){
        if(false){
         return <View style={styles.photoContainer}>
             <Text style={styles.photoText}>
                 ФК
             </Text>
         </View>
        }else{
            return  <View style={styles.photoContainer}>
                <Image
                    source={{uri:'https://facebook.github.io/react/logo-og.png'}}
                    style={{width: 50, height: 50,borderRadius:25}}
                />
            </View>
        }
    }

    render() {
        return this.renderAnotherUserImage()
    }
}

const styles = StyleSheet.create({
    photoContainer: {
        backgroundColor:'red',
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    photoText: {
        fontSize: 16
    },
});
export default ProfileChatImage;
