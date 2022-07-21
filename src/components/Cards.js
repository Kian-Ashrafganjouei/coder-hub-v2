import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import '../App.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>The most popular programming langauges!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='java-image'
              text='Java is a high-level, class-based, object-oriented programming language'
              label='Java'
            />
            <CardItem
              src='python-image'
              text='Python is a high-level, interpreted, general-purpose programming language'
              label='Python'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='c-image'
              text='C is an imperative, procedural language used in operating systems, device drivers and protocol stacks'
              label='C'
            />
            <CardItem
              src='javas-image'
              text='JavaScript is a programming language that is one of the core technologies of the World Wide Web'
              label='JavaScript'
            />
            <CardItem
              src='cpp-image'
              text='C++ is a general-purpose programming language which is an extention of C'
              label='C++'
            />
          </ul>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <h1> Python code sample</h1>
      <div id='outerplayer'>
        <div className='videoplayer'>
        <img src={require('./imges/python-sample.jpg')}/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1> C code sample</h1>
      <div id='outerplayer'>
        <div className='videoplayer'>
        <img src={require('./imges/c-sample.jpg')}/>
        </div>
      </div>

    </div>
  );
}

export default Cards;
