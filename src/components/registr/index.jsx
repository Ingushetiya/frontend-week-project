import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSignUp } from '../app/features/authSlice';
import styles from './reg.module.scss'

const Reg = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


const dispatch = useDispatch()
    const handleLogIn = ()=> {
        dispatch(authSignUp({
            login,
            password
        }))
    }

    return ( <div className={styles.wrapper}>
        <div className={styles.main_block}>
            <input onChange={(e) => setLogin(e.target.value)} value={login} type="text"  placeholder='введите ваш логин' className={styles.inp}/>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="text"  placeholder="введите ваш пароль" className={styles.inp} />
            <button onClick={handleLogIn} className={styles.btn}>SignUp</button>
            <Link to="/auth"><div>SignIn</div></Link>
        </div>
        </div>
    );
};

export default Reg;