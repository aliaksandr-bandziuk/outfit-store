import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/">
            <div className="logo-block">
              <img src={logo} alt="logo"/>
            </div>
          </Link>
          <div className={styles.data}>
            <Currency/>
            <Link to="/cart">
              <div className="cart-header">
                <img src={cart} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;