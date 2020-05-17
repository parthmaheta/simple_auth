import React from 'react';
import {Link} from 'react-router-dom'
import './nav.css'
export default function Nav(props){
   let isLogged=false
   
    return(<div className='nav'>
     <div><h4><Link to='/'>Home</Link></h4></div>
     <div></div>
     <div className='col-3'>
        {isLogged ?  <LogoutButton/>: <LoginButtons/>
        }
         
     </div>
    </div>)
}

function LoginButtons(props){
    return (<React.Fragment>
            <Link to='/login/'>Login</Link> 
            <Link to='/signup/'>SignUp</Link>
    </React.Fragment>)
}
function LogoutButton(props){
    return (<React.Fragment>
            <Link to='/logout/'>LogOut</Link>
    </React.Fragment>)
}