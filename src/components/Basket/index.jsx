import React from 'react';
import CartBasket from "../Cart-basket"
import styles from "./Basket.module.scss"
const Basket = () => {
    return (
        <div className= {styles.wrapper}>
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
            
        </div>
    );
};

export default Basket;