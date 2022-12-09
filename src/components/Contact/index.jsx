import React from 'react';
import styles from "./contacts.module.scss";
import {YMaps, Map, } from "react-yandex-maps";

export default function index() {
  return (
    <>
        <YMaps>
            <div className={styles.contact}>
                <div className={styles.cont}>КОНТАКТЫ</div>
                <div className={styles.adress}>
                    <span>Наш адрес:</span>
                    <span>МО, городской округ Красногорск, село Ильинкое,<br /> 
                        Экспериментальная улица, 10</span>
                </div>
                <div className={styles.pochta}>
                    <span>Наша почта: <br />
                    auto.wash@gmail.com
                    </span>
                </div>
                <div className={styles.knopka}>
                    <button className={styles.stol}>
                        ЗАБРОНИРОВАТЬ СТОЛ
                    </button>
                    <span>8(800)555-35-35</span>
                    <span>Звоните или оставляйте заявку</span>
                </div>
                <div className={styles.set}>
                    <div>Мы в соц сетях:</div>
                    <img src="assets/Vector.png" alt="none" />
                    <img src="assets/Vector1.png" alt="none" />
                    <img src="assets/Vector2.png" alt="none" />
                    <img src="assets/Vector3.png" alt="none" />
                </div>
            </div>
            <div>   
                <Map 
                defaultState={{ center: [43.323875, 45.695026], zoom: 15 }} 
                width={'100%'} 
                height={500}
               />
            </div>
        </YMaps> 
    </>
  )
}
