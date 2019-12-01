import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} className='cart-item__image' alt='item' />
    <div className='cart-item__details'>
      <span className='cart-item__name'>{name}</span>
      <span className='cart-item__price'>{`${quantity} X ${price}`}</span>
    </div>
  </div>
);

export default CartItem;
