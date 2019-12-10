import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/cart/actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='collection-item__image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-item__footer'>
        <span className='collection-item__name'>{name}</span>
        <span className='collection-item__price'>{price}</span>
      </div>
      <CustomButton
        className='custom-button'
        onClick={() => addItem(item)}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => {
    dispatch(addItem(item));
  }
});

export default connect(null, mapDispatchToProps)(CollectionItem);
