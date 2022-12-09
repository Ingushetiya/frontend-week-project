import React from "react";
import styles from "./card.module.scss";

export default function Cart({description, image, name, price, weight}) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img width={230} height={230} src={image} alt="none" />
        </div>
        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}>{description}</div>
            
          </div>
          <div className={styles.text_1}>
            <div className={styles.weigth}>{weight}г</div>
          </div>
        </div>
            <div className={styles.button}>
            <div className={styles.price}>{price} ₽</div>
              <button>
                В корзину <img src="assets/Buy.svg" alt="none" />
              </button>
            </div>
      </div>
    </>
  );
}
