import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from './../../asset/crown.svg';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo-container__image' />
    </Link>
    <div className='option-container'>
      <Link className='option-container__link' to='/shop'>
        SHOP
      </Link>
      <Link className='option-container__link' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option-container__link' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option-container__link' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
