import fire from '../config/Fire'
/*const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
    AccessToken,
} = FBSDK;*/
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGISTER_REQUEST= 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL= 'REGISTER_FAIL';

export const LOGOUT_REQUEST='LOGOUT_REQUEST';
export const LOGOUT_SUCCESS='LOGOUT_SUCCESS';
export const LOGOUT_FAIL='LOGOUT_FAIL';

export const USER_LISTENER_AUTH = 'USER_LISTENER_AUTH';



const onLogRequest=()=>({
    type:LOGIN_REQUEST
});
const onLogSuccess=(credentials)=>({
    type:LOGIN_SUCCESS,
    payload:credentials
});
const onLogError=(error)=>({
    type:LOGIN_FAIL,
    payload: error
});

const onRegRequest=()=>({
    type:REGISTER_REQUEST
});
const onRegSuccess=(credentials)=>({
    type:REGISTER_SUCCESS,
    payload:credentials
});
const onRegError=(error)=>({
    type:REGISTER_FAIL,
    payload: error
});

const onLogOutRequest = () => ({
    type: LOGOUT_REQUEST,
});

const onLogOutSuccess=()=>({
    type: LOGOUT_SUCCESS,
});
const onLogOutError=(error)=>({
    type: LOGOUT_FAIL,
    error: true,
    payload: error,
});

const onUserListener=(credentials)=>({
    type: USER_LISTENER_AUTH,
    payload:credentials
});
export const loginAction=(email,password)=>{
    return async dispatch=>{
        dispatch(onLogRequest());
        await fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then(async ()=>{
                return await fire.auth().currentUser
            })
            .then((userData)=> {
                dispatch(onLogSuccess(userData))
            })
            .catch((error) => {
                dispatch(onLogError(error))
            });
    }
};


export const registerAction=(email,password,name)=>{
    return async dispatch=>{
        dispatch(onRegRequest());
        await fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async userCredentials =>{
                if (userCredentials.user) {
                    await userCredentials.user.updateProfile({displayName: name});
                    await fire
                        .firestore()
                        .collection('users')
                        .doc(userCredentials.user.uid)
                        .update({
                            displayName: name,
                        });
                    let userData = await fire.auth().currentUser;
                    dispatch(onRegSuccess(userData))
                }
            })
            .catch((error) => {
                dispatch(onRegError(error))
            });
    }
};


export const logout=()=>{
    return dispatch => {
        dispatch(onLogOutRequest());
        fire.auth().signOut().then(() => {
            dispatch(onLogOutSuccess())
        }).catch((error)=> {
            dispatch(onLogOutError(error))
        });
    }
};
export const userListener=(user)=>{
    return dispatch => {
        dispatch(onUserListener(user))
    }
};
/*
import { firebase } from '@firebase/app';

import '@firebase/auth';

export function logUserInFacebook() {
    return (dispatch) => {
        LoginManager.logInWithPermissions(['public_profile', 'user_friends', 'email'])
            .then(
                (result) => {
                    if (result.isCancelled) {
                        console.log('Whoops!', 'You cancelled the sign in.');
                    } else {
                        AccessToken.getCurrentAccessToken()
                            .then((data) => {
                                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                                firebase.auth().signInWithCredential(credential)
                                    .then(()=>{
                                        console.log('fullfield')
                                    })
                                    .catch((error) => {
                                       console.log(error)
                                    });
                            });
                    }
                },
                (error) => {
                    console.log('Sign in error', error);
                },
            );
    };
}

export function logUserInGitHub() {
    return dispatch => {
        const provider = new firebase.auth.GithubAuthProvider();
    };
}*/
