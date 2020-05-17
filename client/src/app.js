import React from 'react';
import Nav from './nav/'
import {Route, withRouter, Switch} from 'react-router-dom'
import FORM from './form'
import LOGOUT from './form/logout.js'
import { useStore } from 'react-redux';

const APP = (props) => {
  return (
    <React.Fragment>
     <Nav isLogged={useStore().getState().IS_LOGGED}/>
    <Switch>
         <Route path='/' exact component={HOME}/>
         <Route path='/login/' component={()=><FORM heading='Login' submit='Login'/>}/>
         <Route path='/signup/' component={()=><FORM heading='SignUp' submit='SignUp'/>}/>
         <Route path='/logout/' component={LOGOUT}/>
    </Switch>   
      </React.Fragment>
    )

}
 
     
         
     

 function HOME(props){
   let store=useStore()
   
 return(<h1 align="center">WelCome  {store.getState().UID}</h1>)
 }
export default withRouter(APP)



 