import React from 'react';
import './form.css'
export default function LOGIN(props){
   return(
   <form>
       <h3 align='center'>{props.heading}</h3>
       <input placeholder='ENTER USER ID' type='text'/>
       <input placeholder='ENTER PASSWORD' type='password'/>
       <input type='button' value={props.submit}/>
   </form>)
}