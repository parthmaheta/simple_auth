let initState={
    UID:'',
    IS_LOGGED:false
}

export default function user_reducer(state=initState,action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{IS_LOGGED:true,UID:action.payload.uid}
         
        case 'LOGOUT':    
            return{IS_LOGGED:false,UID:''}
         
            default:   
            return state
    }
}