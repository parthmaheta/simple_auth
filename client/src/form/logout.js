import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'

export default function LOGOUT(props){
    let [logout,setLogout]=useState(false)
    
    return(
           logout ? <Redirect to='/'/> : <h1 align='center'>Please Wait</h1>
    )
}