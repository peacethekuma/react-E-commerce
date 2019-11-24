import React from 'react';
import './homepage.style.scss';

const Homepage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='menu-item__content'>
          <h1 className='menu-item__title'>HATS</h1>
          <span className='menu-item__subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-item__content'>
          <h1 className='menu-item__title'>JACKETS</h1>
          <span className='menu-item__subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-item__content'>
          <h1 className='menu-item__title'>SNEAKERS</h1>
          <span className='menu-item__subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-item__content'>
          <h1 className='menu-item__title'>MENS</h1>
          <span className='menu-item__subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-item__content'>
          <h1 className='menu-item__title'>WOMENS</h1>
          <span className='menu-item__subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
