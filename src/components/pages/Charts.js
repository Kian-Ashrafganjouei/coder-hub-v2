import React from 'react';
import '../../App.css';
import HeroOther from '../HeroOther'
import Navbar from '../Navbar';

export default function Charts() {
  return (
    <>
    <HeroOther title={"Charts"} desc={"Look at the data"}/>
    <h1>Percentage of Programmers vs Programming Occupation</h1>
    <div id='outerplayer'>
      <div className='videoplayer'>
        <img src={require('../imges/occupation.jpg')}/>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    <h1>Most Used Technologies/Languages</h1>
    <div id='outerplayer'>
      <div className='videoplayer'>
        <img src={require('../imges/lan-tech.jpg')}/>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    <h1>Age Distribution of Programmers</h1>
    <div id='outerplayer'>
      <div className='videoplayer'>
        <img src={require('../imges/age.jpg')}/>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    </>
  );

}
