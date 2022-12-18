import React from 'react';

import styles from './FullOutfit.module.scss';

import minImage from '../../assets/img/min-image.jpg';
import fullImage from '../../assets/img/full-image.jpg';

const FullOutfit = () => {
  return (
    <section className={styles.outfit}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <div className={styles.minImages}>
              <img src={minImage} alt="" className="min-image" />
              <img src={minImage} alt="" className="min-image" />
              <img src={minImage} alt="" className="min-image" />
            </div>
            <div className="full-images">
              <img src={fullImage} className="full-image" />
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Apollo</h2>
            <p className={styles.subtitle}>Running Short</p>
            <div className={styles.options}>
              <p className={styles.options__title}>Size:</p>
              <div className={styles.sizes}>
                <div className={styles.size}>XS</div>
                <div className={`${styles.size} ${styles.sizeActive}`}>S</div>
                <div className={styles.size}>M</div>
                <div className={styles.size}>L</div>
              </div>
            </div>
            <div className={styles.options}>
              <p className={styles.options__title}>Color:</p>
              <div className={styles.colors}>
                <div className={`${styles.color} ${styles.color1} ${styles.colorActive}`}></div>
                <div className={`${styles.color} ${styles.color2} `}></div>
                <div className={`${styles.color} ${styles.color3} `}></div>
              </div>
            </div>
            <div className={styles.options}>
              <p className={styles.options__title}>Price:</p>
              <p className={styles.cost}>$50.00</p>
            </div>
            <button className={styles.button}>Add to cart</button>
            <p className={styles.description}>
              Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullOutfit;