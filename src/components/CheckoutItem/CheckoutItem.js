import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, qunatity } }) => (
  <div className='checkout-item'>
    <div className='checkout-item__image-container'>
      <img src={imageUrl} alt="item" />
    </div>
    <span className='checkout-item__name'>{name}</span>
    <span className='checkout-item__quantity'>{qunatity}</span>
    <span className='checkout-item__price'>{price}</span>
    <div className='checkout-item__remove-button'>&#10005;</div>
  </div>
)

export default CheckoutItem;