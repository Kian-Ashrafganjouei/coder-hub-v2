import React, {useState} from 'react'
import Navbar from '../Navbar';

function Courses1(props) {

  return (
    <>

    <div className='sign-up-container'>
    <input type='text' name="name" placeholder='Name' value={props.formValue.name} onChange={event=>props.handleClick(event,1)}/>
    <p>{props.formError.name}</p>
    <input type='text' name="email" placeholder='Email' value={props.formValue.email} onChange={event=>props.handleClick(event,1)}/>
    <p>{props.formError.email}</p>

    <input type='text' name="password" placeholder='Password' value={props.formValue.password} onChange={event=>props.handleClick(event,1)}/>
    <p>{props.formError.password}</p>

    <input type='text' name="confirmpass" placeholder='Confirm Password' value={props.formValue.confirmpass} onChange={event=>props.handleClick(event,1)}/>
    <p>{props.formError.confirmpass}</p>

</div>
    </>

  )
}

export default Courses1