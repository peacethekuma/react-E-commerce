import React from 'react';

import './CheckoutItem.scss';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/actions';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='checkout-item__image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='checkout-item__name'>{name}</span>
      <span className='checkout-item__quantity'>
        <div
          className='checkout-item__arrow'
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className='checkout-item__value'>{quantity}</span>
        <div className='checkout-item__arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='checkout-item__price'>{price}</span>
      <div
        className='checkout-item__remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
