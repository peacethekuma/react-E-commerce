import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors';
import './CheckoutPage.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-header__block">
        <span>Product</span>
      </div>
      <div className="checkout-header__block">
        <span>Description</span>
      </div>
      <div className="checkout-header__block">
        <span>Quantity</span>
      </div>
      <div className="checkout-header__block">
        <span>Price</span>
      </div>
      <div className="checkout-header__block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
    <div className='checkout-total'>TOTAL: ${total}</div>
    <div className='checkout-test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage);