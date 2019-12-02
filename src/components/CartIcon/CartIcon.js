import React from 'react';
import './CartIcon.scss';
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';

import { toggleCartHidden } from '../../redux/cart/actions';
import { selectCartItemsCount } from '../../redux/cart/selectors';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='cart-icon__image' />
    <span className='cart-icon__count'>{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
