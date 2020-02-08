import React from 'react';
import classNames from 'classnames';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={classNames({
      'menu-item': true,
      'menu-item--large': size === 'large'
    })}
    onClick={() => { history.push(`${match.url}${linkUrl}`) }}
  >
    <div
      className='menu-item__background'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='menu-item__content'>
      <h1 className='menu-item__title'>{title.toUpperCase()}</h1>
      <span className='menu-item__subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
