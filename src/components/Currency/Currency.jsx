import React, { useState } from 'react';

import styles from './Currency.module.scss';

import arrow from '../../assets/img/currency-arrow.svg';

export const currencyList = [
  { name: 'zł PLN', currencyProperty: 'pln' },
  { name: '€ EUR', currencyProperty: 'eur' },
  { name: '$ USD', currencyProperty: 'usd' }
]

const Currency = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.sort}>
      <div onClick={() => setOpen(!open)} className={styles.currency}>
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
      {
        open ? (
          <div className={styles.currencyPopup}>
            <ul className={styles.list}>
              {
                currencyList.map((obj, index) => (
                  <li
                    key={index}
                    className={styles.sort.currencyProperty === obj.currencyProperty ? 'active' : ''}
                  >
                  {obj.name}
                  </li>
                ))
              }
            </ul>
          </div>
        ) : ''
      }

    </div>
  )
}

export default Currency;