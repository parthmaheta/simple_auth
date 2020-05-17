export function user_login_sucess(uid){
   return {
       type:'LOGIN_SUCCESS',
       payload:{
           uid:uid
       }
   }
}

export function user_logout(uid){
    return {
        type:'LOGOUT'        
    }
 }