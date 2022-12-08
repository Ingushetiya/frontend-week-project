import React from "react";
import styles from "./cartBasket.module.scss";
const index = ({id, img, price, description, name, amount}) => {
  return (
    <div key={id} className="wrapper">
      <div className={styles.cart_content}>      
        <div className={styles.content}>
          <img
            height={80}
            width={110}
            src={img}
            alt="burget"
          />
          <div className={styles.text}>
            <p>{name}</p>
            <span>
              {description}
            </span>
          </div>
          <div className={styles.incDec}>
            <div className={styles.dec}>
              <span></span>
            </div>
            <div className={styles.amount}>{amount}</div>
            <div className={styles.inc}>
              <img src="assets/plus.svg" alt="inc" />
            </div>
          </div>
          <div className={styles.total}>{price} ₽</div>
          <div className={styles.remove}>
            <img src="assets/rem.svg" alt="rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
