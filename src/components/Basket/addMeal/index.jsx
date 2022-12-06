import React from 'react';
import styles from "./addToOrder.module.scss"
const addToOrder = () => {
    return (<>
   
        <div className={styles.addMeal}> 
          <img width={200} height={100} src="assets/123.png" alt="salad" />
          <h3>КВАС АНАНАСОВЫЙ</h3>
          <div className={styles.btn}><span>Добавить</span> <div className={styles.btn_plus}></div></div>
          <div className={styles.price}>1640 ₽</div>
          <div className={styles.border}></div>         
        </div>
        <div className={styles.addMeal}> 
          <img width={200} height={100} src="assets/123.png" alt="salad" />
          <h3>КВАС АНАНАСОВЫЙ</h3>
          <div className={styles.btn}><span>Добавить</span> <div className={styles.btn_plus}></div></div>
          <div className={styles.price}>1640 ₽</div>
          <div className={styles.border}></div>         
        </div>
        <div className={styles.addMeal}> 
          <img width={200} height={100} src="assets/123.png" alt="salad" />
          <h3>КВАС АНАНАСОВЫЙ</h3>
          <div className={styles.btn}><span>Добавить</span> <div className={styles.btn_plus}></div></div>
          <div className={styles.price}>1640 ₽</div>
          <div className={styles.border}></div>         
        </div>
        <div className={styles.addMeal}> 
          <img width={200} height={100} src="assets/123.png" alt="salad" />
          <h3>КВАС АНАНАСОВЫЙ</h3>
          <div className={styles.btn}><span>Добавить</span> <div className={styles.btn_plus}></div></div>
          <div className={styles.price}>1640 ₽</div>
          <div className={styles.border}></div>         
        </div>
        </>
    );
};

export default addToOrder;