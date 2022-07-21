import React from 'react'
import { Button } from '../Button';
import '../Button2.css'
import '../../App.css'
import Navbar from '../Navbar';

function Courses3() {
  return (

    <>
    <div className="other-info-container">
        <h3>Your course registration is complete. Thank you!</h3>
        <Button
          className='btns'
          buttonStyle='btn--primary-v2'
          buttonSize='btn--large'
          action='pages/Home.js'
        >
          Home
        </Button>
    </div>  


    </>
)
}

export default Courses3;

