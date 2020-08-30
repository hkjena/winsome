import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './styles.scss';

const CartIcon = ({ toggleCart }) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{0}</span>
    </div>
  );
};

export default connect(null, { toggleCart })(CartIcon);
