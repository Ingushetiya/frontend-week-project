import React from 'react';
import styles from './authorization.module.scss'

const index = () => {
    return ( <div className={styles.wrapper}>
        <div className={styles.main_block}>
            <input type="text"  placeholder='введите ваш логин' className={styles.inp}/>
            <input type="text"  placeholder="введите ваш пароль" className={styles.inp} />
            <button className={styles.btn}>войти</button>
            <div>зарегистрироваться</div>
        </div>
        </div>
    );
};

export default index;