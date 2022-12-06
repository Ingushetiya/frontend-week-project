import React from 'react';
import styles from './card.module.scss';

export default function index() {



  return (
    <>
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src="assets/menu_1.png" alt="none" />
            </div>
            <div className={styles.info}>
                <div className={styles.text}>
                    <div className={styles.name}>Гусь</div>
                    <div className={styles.description}>Фаршированный яблоками</div>
                    <div className={styles.price}>17 500 ₽</div>
                </div>
                <div className={styles.text_1}>
                    <div className={styles.weigth}>вес:225г</div>
                    <div className={styles.button}><button>В корзину <img src="assets/Buy.svg" alt="none" /></button></div>
                </div>
                
            </div>
        </div>
    </>
    
  )
}
