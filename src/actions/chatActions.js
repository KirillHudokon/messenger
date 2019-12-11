import fire from '../config/Fire'
import {store} from '../store/ConfigureStore'
export const CHANGE_USER_SEARCH_TEXT = 'CHANGE_USER_SEARCH_TEXT';

export const SEARCH_USER_REQUEST = 'SEARCH_USER_REQUEST';
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';
export const SEARCH_USER_FAIL = 'SEARCH_USER_FAIL';




const onChangeUserText=(text)=>({
    type:CHANGE_USER_SEARCH_TEXT,
    payload:text
});

const onSearchUserRequest=()=>({
    type:SEARCH_USER_REQUEST
});
const onSearchUserSuccess=(foundedUsers)=>({
    type:SEARCH_USER_SUCCESS,
    payload:foundedUsers
});
const onSearchUserError=(error)=>({
    type:SEARCH_USER_FAIL,
    payload: error
});

export const changeUserText=(text)=>{
    return dispatch=>{
        dispatch(onChangeUserText(text))
    }
};

export const searchUserAction=(text)=>{
    return async dispatch=> {
        dispatch(changeUserText(text));
        dispatch(onSearchUserRequest());
        let foundedUsers=[];
        await fire.firestore()
            .collection("users")
            .where('displayName','==',text)
            .get().then( async querySnapshot => {
            for(let doc of querySnapshot.docs){
                if(store.getState().user.cred.displayName!==text) {
                    await fire.firestore().collection('users').doc(store.getState().user.cred.uid).get().then(userData=>{
                        let flag=false;
                        userData.data().friendList.forEach(item=>{
                            doc.data().friendList.forEach(item2=>{
                                if(item===item2){
                                    flag=true
                                }
                            })
                        });
                        if(!flag) {
                            let foundedUserData={
                                uid:doc.id,
                                data:doc.data()
                            };

                            foundedUsers = [
                                ...foundedUsers,
                                foundedUserData,
                            ]
                        }
                        flag=false
                    })
                }
            }
            return foundedUsers
        }).then(data=>{
            dispatch(onSearchUserSuccess(data))
        }).catch(e=>{
            dispatch(onSearchUserError(e.message))
        })
    }
};

