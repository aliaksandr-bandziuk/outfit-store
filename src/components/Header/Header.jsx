import React from 'react';

import styles from './Header.module.scss';

import Currency from '../Currency/Currency';

import logo from '../../assets/img/logo.svg';
import cart from '../../assets/img/cart.svg';

const categories = [
  'Women',
  'Men',
  'Kids'
];

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <nav className="nav">
            <ul className={styles.list}>
              <li className={styles.active}>Women</li>
              <li>Men</li>
              <li>Kids</li>
            </ul>
          </nav>
          <div className="logo-block">
            <img src={logo} alt="logo"/>
          </div>
          <div className={styles.data}>
            <Currency/>
            <div className="cart-header">
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;