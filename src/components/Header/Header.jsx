import React from 'react';
import styles from "./Header.module.scss"
const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.content}>
                    <img width={50} height={50} src={"assets/logo.png"} alt="logo" />
                    <div className="adress">
                        <img width={24} height={24} src="assets/location.png" alt="" />
                         <input type="text"
                                 placeholder='Введите адрес доставки' /> 
                    </div>
                    <div className="contact">
                        <img width={24} height={24} src="assets/phone.png" alt="" />

                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Header;