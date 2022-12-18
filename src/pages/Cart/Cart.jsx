import React from 'react';

import styles from './Cart.module.scss';

import cartImg1 from '../../assets/img/cart-img-1.jpg';
import cartImg2 from '../../assets/img/cart-img-2.jpg';

const Cart = () => {
  return (
    <section className={styles.cart}>
      <div className="container">
        <h2 className={styles.cartHeader}>Your Bag</h2>
        <div className={styles.goods}>
          <div className={styles.product}>
            <div className={styles.content}>
              <h3 className={styles.title}>Apollo</h3>
              <p className={styles.subtitle}>Running Short</p>
              <p className={styles.price}>$50.00</p>
              <div className={styles.options}>
                <p className={styles.optionsTitle}>Size:</p>
                <div className={styles.sizes}>
                  <div className={styles.size}>XS</div>
                  <div className={`${styles.size} ${styles.sizeActive}`}>S</div>
                  <div className={styles.size}>M</div>
                  <div className={styles.size}>L</div>
                </div>
              </div>
              <div className={styles.options}>
                <p className={styles.optionsTitle}>Color:</p>
                <div className={styles.colors}>
                  <div className={`${styles.color} ${styles.color1} ${styles.colorActive}`}></div>
                  <div className={`${styles.color} ${styles.color2} `}></div>
                  <div className={`${styles.color} ${styles.color3} `}></div>
              </div>
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.amount}>
                <button className={`${styles.btn} ${styles.btnPlus}`}>+</button>
                <p className={styles.amountNumber}>1</p>
                <button className={`${styles.btn} ${styles.btnMinus}`}>-</button>
              </div>
              <div className={styles.picture}>
                <img className={styles.pictureImg} src={cartImg1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.totalOptions}>
            <div className={styles.totalTitle}>
              <div className={styles.text}>Tax 21%:</div>
              <div className={styles.text}>Quantity:</div>
              <div className={`${styles.text} ${styles.textBold}`}>Total:</div>
            </div>
            <div className="totalNumber">
              <div className={`${styles.number} ${styles.text}`}>$42.00</div>
              <div className={`${styles.number} ${styles.text}`}>3</div>
              <div className={`${styles.number} ${styles.text}`}>$200.00</div>
            </div>
          </div>
          <button className={styles.totalButton}>Order</button>
        </div>
      </div>
    </section>
  )
}

export default Cart;