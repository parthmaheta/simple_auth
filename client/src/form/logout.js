import React, { useState, useEffect } from 'react';
import {Redirect, useHistory} from 'react-router-dom'
import { useStore } from 'react-redux';
import {user_logout} from './../state/action/user_action'

export default function LOGOUT(props){
    let store=useStore()
    let history=useHistory()
    useEffect(()=>{
        if(store.getState().IS_LOGGED)
        {  fetch('http://localhost:5000/logout',{method:'post', headers: {'Content-Type':'application/x-www-form-urlencoded'},body:'logout'})
            .then(res=>{store.dispatch(user_logout())
              history.replace('/')
            })
        }
        else
          history.replace('/')
    },[])

    return(
            <h1 align='center'>Please Wait</h1>
    )
}