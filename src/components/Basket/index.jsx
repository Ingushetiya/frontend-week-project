import React from "react";
import CartBasket from "./Cart-basket";
import AddToOrder from "./addMeal";
import styles from "./Basket.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchUserBasket } from "../app/features/BasketSlice";

const Basket = () => {
  const product = useSelector((state)=> state.products.products)
  console.log("product", product);
  const basketUser = useSelector((state)=> state.products.basket)
  console.log("EEEEEE", basketUser);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUserBasket())
  }, [dispatch])
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
        {basketUser.products?.map(item=>{
          
        })}
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
