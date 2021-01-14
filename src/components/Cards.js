import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Les dernières actualités!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Covid-19. Un seul cas d’allergie au vaccin pour l’instant recensé en France, selon Olivier Véran'
              label='France'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Après l assaut contre le capitole, des effets collatéraux en cascade'
              label='Etats-Unis'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Couvre-feu à 18h étendu ou généralisé, surveillance des écoles... A quoi faut-il s attendre ?'
              label='France'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Un homme meurt en percutant un véhicule de gendarmerie'
              label='France'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='K2. Les nouvelles ne sont pas bonnes'
              label='Pakistan'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;