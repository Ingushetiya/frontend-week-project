import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../app/features/BasketSlice";

import styles from "./card.module.scss";

export default function Cart({ _id, description, image, name, price, weight }) {  

  const basketUser = useSelector((state) => state.products.basket.products);

  const dispatch = useDispatch();

  const onCart = basketUser?.find(item => item.productId ===_id)

  const handleAddBasket = () => {
    // setBtn(true);
    
     onCart ? alert("Уже добавлено"): dispatch(addBasket(_id))
   
  };

 
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
          <button
            disabled={ onCart }
            onClick={() => handleAddBasket()}
          >
            {onCart ? "В Корзине" : "В корзину"} <img src="assets/Buy.svg" alt="none" />
          </button>
        </div>
      </div>
    </>
  );
}
