import React from "react";
import { useDispatch } from "react-redux";
import { amountBasket, deleteProductBasket } from "../../app/features/BasketSlice";
import styles from "./cartBasket.module.scss";
const CartBasket = ({id, img, price, description, name, amount}) => {
  const dispatch = useDispatch()
  const handleInc = () =>{
    dispatch(amountBasket({id, type: "plus"}))    
  }
  const handleDec = () =>{
    dispatch(amountBasket({id, type: "minus"}))
  }
  const handleRemProd = (id) =>{
    dispatch(deleteProductBasket(id))
  }
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
            <button disabled={amount === 1} onClick={()=>handleDec()} className={styles.dec}>
              <span></span>
            </button>
            <div className={styles.amount}>{amount}</div>
            <button  onClick={()=>handleInc()} className={styles.inc}>
              <img src="assets/plus.svg" alt="inc" />
            </button>
          </div>
          <div className={styles.total}>{price} ₽</div>
          <button onClick={()=>handleRemProd(id)} className={styles.remove}>
            <img src="assets/rem.svg" alt="rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartBasket;
