import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './styles.scss';

const Header = ({ currentUser, hidden }) => {
  console.log(currentUser, hidden);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/login'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden || <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user, cart: { hidden } }) => ({
  currentUser: user,
  hidden,
});

export default connect(mapStateToProps)(Header);
