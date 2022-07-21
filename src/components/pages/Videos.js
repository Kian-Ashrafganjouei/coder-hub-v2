import React from 'react';
import '../../App.css';
import HeroOther from '../HeroOther'
import Navbar from '../Navbar';

export default function Videos() {
  return(
    <>

    <HeroOther title={"Video Tutorials"} desc={"Master the languages through videos"}/>
    <div id="outerplayer">
      <div className='videoplayer'> 
        <h1>C langauge tutorial</h1>
        <iframe width="1170" height="658" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="C Programming Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='videoplayer'> 
        <h1>Java langauge tutorial</h1>
        <iframe width="1170" height="658" src="https://www.youtube.com/embed/grEKMHGYyns" title="Learn Java 8 - Full Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='videoplayer'> 
        <h1>Python langauge tutorial</h1>
        <iframe width="1170" height="658" src="https://www.youtube.com/embed/rfscVS0vtbw" title="Learn Python - Full Course for Beginners [Tutorial]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
    </div>
    </>      

  );
}
