import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/actualités.jpg'/>
      <h1>L'actualité en direct</h1>
      <br></br>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Suivre le live
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Regarder les replays <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;