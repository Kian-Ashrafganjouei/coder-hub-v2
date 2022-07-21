import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Frencgstyle.css'
function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Built For Coders</h1>
      <p>Start your programming journey here</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          action='pages/Courses.js'
        >
          TAKE A COURSE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          action='pages/Ide.js'
        >
          CODE<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
