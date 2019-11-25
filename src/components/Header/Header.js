import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../asset/crown.svg';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo-container__image' />
    </Link>
    <div className='option-container'>
      <Link lassName='option-container__link' to='/shop'>
        SHOP
      </Link>
      <Link className='option-container__link' to='/contact'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
