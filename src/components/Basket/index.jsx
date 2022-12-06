import React from "react";
import CartBasket from "./Cart-basket";
import AddToOrder from "./addMeal";
import styles from "./Basket.module.scss";
import { Link } from "react-router-dom";
const Basket = () => {
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.title_basket}>
      <Link to="/">  &lt; К выбору блюда</Link>
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

        <div className={styles.line_2}></div>
        <div className={styles.form}>
            <div className={styles.totalPrice}>Итого: <span>500 ₽ </span></div>
            <div className={styles.baskerGreenBtn}><span>Оформить заказ</span> </div>
        </div>
    </div>
  );
};

export default Basket;
