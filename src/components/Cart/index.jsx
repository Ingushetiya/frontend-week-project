import React from "react";
import styles from "./card.module.scss";

export default function Cart({description, image, name, price, weight}) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img width={250} height={250} src={image} alt="none" />
        </div>
        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}>{}</div>
            <div className={styles.price}>{price} ₽</div>
          </div>
          <div className={styles.text_1}>
            <div className={styles.weigth}>{weight}:225г</div>
            <div className={styles.button}>
              <button>
                В корзину <img src="assets/Buy.svg" alt="none" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
