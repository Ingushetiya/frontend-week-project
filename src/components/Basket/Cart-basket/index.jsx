import React from "react";
import styles from "./cartBasket.module.scss";
const index = () => {
  return (
    <div className="wrapper">
      <div className={styles.cart_content}>
        <div className={styles.content}>
          <img
            height={80}
            width={110}
            src="https://s82079.cdn.ngenix.net/330x0/1a9q7whz1122m3ube23e819eerst"
            alt="burget"
          />
          <div className="text">
            <p>ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</p>
            <span>
              Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок,
              базилик, соус песто
            </span>
          </div>
          <div className={styles.incDec}>
            <div className={styles.dec}>
              <span></span>
            </div>
            <div className={styles.amount}>0</div>
            <div className={styles.inc}>
              <img src="assets/plus.svg" alt="inc" />
            </div>
          </div>
          <div className={styles.total}>{1640} ₽</div>
          <div className={styles.remove}>
            <img src="assets/rem.svg" alt="rem" />
          </div>
        </div>
        <div className={styles.content}>
          <img
            height={80}
            width={110}
            src="https://s82079.cdn.ngenix.net/330x0/1a9q7whz1122m3ube23e819eerst"
            alt="burget"
          />
          <div className="text">
            <p>ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</p>
            <span>
              Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок,
              базилик, соус песто
            </span>
          </div>
          <div className={styles.incDec}>
            <div className={styles.dec}>
              <span></span>
            </div>
            <div className={styles.amount}>0</div>
            <div className={styles.inc}>
              <img src="assets/plus.svg" alt="inc" />
            </div>
          </div>
          <div className={styles.total}>{1640} ₽</div>
          <div className={styles.remove}>
            <img src="assets/rem.svg" alt="rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
