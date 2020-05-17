import React from 'react';
import Nav from './nav/'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import FORM from './form'
import LOGOUT from './form/logout.js'
const APP = (props) => {
  return <Nav/>

}
 function withRouter(COMPONENT){
   return function(props){
     return(
     <BrowserRouter>
       <COMPONENT {...props}/>
       <Switch>
         <Route path='/' exact component={HOME}/>
         <Route path='/login/' component={()=><FORM heading='Login' submit='Login'/>}/>
         <Route path='/signup/' component={()=><FORM heading='SignUp' submit='SignUp'/>}/>
         <Route path='/logout/' component={LOGOUT}/>
       </Switch>
     </BrowserRouter>)
   }

 }

 function HOME(props){
   return(<h1 align="center">Sweet Home</h1>)
 }
export default withRouter(APP);

 