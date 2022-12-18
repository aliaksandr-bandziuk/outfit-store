import React from 'react';

import styles from './Currency.module.scss';

import arrow from '../../assets/img/currency-arrow.svg';

const Currency = () => {
  return (
    <div className={styles.currency}>
      <p className={styles.name}>$ USD</p>
      <svg
        width="8"
        height="4"
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
        d="M1 0.5L4 3.5L7 0.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default Currency;