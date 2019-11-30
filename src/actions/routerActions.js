export const CHANGE_ROUTE = 'CHANGE_ROUTE';

const onChangeRoute=(route)=>({
    type:CHANGE_ROUTE,
    payload:route
});

export const changeRoute=(title)=>{
    return  dispatch=>{
        dispatch(onChangeRoute(title))
    }
};

