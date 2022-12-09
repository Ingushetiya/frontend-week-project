import React from 'react';
import styles from './footer.module.scss';


export default function index() {
  return (
    <>
    <div className={styles.footer}>
    <div className={styles.image}>
        <img 
        width={80}
        height={80}
        src="assets/logo.png" alt="none" />
    </div>
        

        <div className={styles.copyrate}>
            <span className={styles.OOO}>© OOO CK «АПШЕРОН»<br />Все права защищены.2010-2020</span>
            <span>Пользовательское соглашение</span>
            <span>Карта сайта</span>
            <span>Политика конфиденциальности</span>
        </div>
        <div className={styles.categ}>
            <span>О ресторане</span>
            <span>Условие доставки</span>
            <span>Возврат товара</span>
            <span>Акции</span>
        </div>
    </div>
         
    </>
  )
}
