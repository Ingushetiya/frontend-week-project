import React from "react";
import CartBasket from "./Cart-basket";
import AddToOrder from "./addMeal";
import styles from "./Basket.module.scss";
const Basket = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_basket}>
        <span>&lt; К выбору блюда</span>
        <div className={styles.basket_h1}>
          <div className={styles.line}></div>
          <p>КОРЗИНА</p>
          <span>(в корзине {0} товара)</span>
        </div>
      </div>
      <div className={styles.cartParrent}>
        <CartBasket />
      </div>
      <div className={styles.addOrderText}>ДОБАВИТЬ К ЗАКАЗУ</div>
      <div className={styles.addMeal}>
        <AddToOrder />
      </div>

        <div className={styles.line}></div>
        <div className={styles.form}>
            
        </div>
    </div>
  );
};

export default Basket;
