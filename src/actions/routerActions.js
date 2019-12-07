import fire from '../config/Fire'

export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const CHANGE_USER_SEARCH_TEXT = 'CHANGE_USER_SEARCH_TEXT';

export const SEARCH_USER_REQUEST = 'SEARCH_USER_REQUEST';
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';
export const SEARCH_USER_FAIL = 'SEARCH_USER_FAIL';


const onChangeRoute=(route)=>({
    type:CHANGE_ROUTE,
    payload:route
});

const onChangeUserText=(text)=>({
    type:CHANGE_USER_SEARCH_TEXT,
    payload:text
});

export const changeRoute=(title)=>{
    return dispatch=>{
        dispatch(onChangeRoute(title))
    }
};

export const changeUserText=(text)=>{
    return dispatch=>{
        dispatch(onChangeUserText(text))
    }
};

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

export const searchUserAction=(text)=>{
    return dispatch=> {
       dispatch(changeUserText(text));
       dispatch(onSearchUserRequest());
        let foundedUsers=[];
        fire.firestore().collection("users").get().then( querySnapshot => {
            querySnapshot.forEach( doc => {
                if(doc.data().displayName===text) {
                    let foundedUserData={
                        uid:doc.id,
                        data:doc.data()
                    };
                    foundedUsers = [
                       ...foundedUsers,
                       foundedUserData,
                    ]
                }
            });
            return foundedUsers
        }).then(data=>{
           dispatch(onSearchUserSuccess(data))
        }).catch(e=>{
            dispatch(onSearchUserError(e.message))
        })
    }
};

