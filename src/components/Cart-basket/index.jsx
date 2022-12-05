import React from 'react';
import styles from "./cartBasket.module.scss"
const index = () => {
    return (
        <div className={styles.cart_content} >
            <div className={styles.content}>
                <img height={80} width={110} src="https://s82079.cdn.ngenix.net/330x0/1a9q7whz1122m3ube23e819eerst" alt="burget" />
                <div className="text">
                        <p>ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</p>            
                    <span>Кальмары, мидии, креветки, сыр маасдам, 
                            красный лук, микс оливок, базилик, соус песто</span>
                </div>
               
            </div>
        </div>
    );
};

export default index;