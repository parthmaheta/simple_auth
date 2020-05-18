import React, { useState } from 'react';
import './form.css'
import { Redirect, useHistory} from 'react-router-dom';
import {user_login_sucess} from './../state/action/user_action'
import { useStore } from 'react-redux';
export default function LOGIN(props){
    let [UID,setUID]=useState('')
    let [PW,setPW]=useState('')
    let store=useStore()
    let history=useHistory()
    
    function setuid(e){
        setUID(e.target.value)  
   }   
   
   function setpw(e){
     setPW(e.target.value)  
   }
   function submit(){
        if(UID==''||PW=='')
          alert('both field is required')
        else
         {
            let url='login';
            if(props.submit=='SignUp')
             url='signup'
             
             showLoading()
             fetch('http://localhost:5000/'+url,{method:'post', headers: {'Content-Type':'application/x-www-form-urlencoded'},
             body: 'UID='+UID+'&PW='+PW})
             .then(res=>res.text())
             .then(res=>{
                 if(res=='true')
                    {   
                        if(props.submit=='Login')   
                         store.dispatch(user_login_sucess(UID))
                        else if(props.submit=='SignUp')
                         alert('Registered Succesfully')                         
                         history.replace('/')
                        
                    }
                 else
                  {
                    hideLoading()
                    alert('Invalid')
                  }
             })
         }
   }

   if(store.getState().IS_LOGGED)
    return <Redirect to='/'/>
   return(
   <form id='form'>
       <h3 align='center'>{props.heading}</h3>
       <input placeholder='ENTER USER ID' required type='text' onChange={setuid}/>
       <input placeholder='ENTER PASSWORD' required type='password' onChange={setpw}/>
       <input type='button' value={props.submit} onClick={submit}/>
   </form>)
}

function showLoading(){
    document.getElementById('form').style.pointerEvents='none'
    document.getElementById('form').style.opacity='0.4'
}

function hideLoading(){
    document.getElementById('form').style.pointerEvents='auto'
    document.getElementById('form').style.opacity='1.0'
}