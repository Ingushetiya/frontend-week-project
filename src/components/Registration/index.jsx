import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSignUp, deleteError } from "../app/features/authSlice";
import styles from "./reg.module.scss";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.user.error);
  const message = useSelector((state) => state.user.message);

  const dispatch = useDispatch();
  const handleLogIn = () => {
    dispatch(
      authSignUp({
        login,
        password,
      })
    );
    setLogin('')
    setPassword('')
  };

  const handleDeleteError = () => {
    dispatch(deleteError());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_block}>
        {error && <span className={styles.messageError}>{error}</span>}
        {message && !error && (
          <span className={styles.messageOk}>{message}</span>
        )}
        <input
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          type="text"
          placeholder="введите ваш логин"
          className={styles.inp}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          placeholder="введите ваш пароль"
          className={styles.inp}
        />
        <button onClick={handleLogIn} className={styles.btn}>
          зарегистрироваться
        </button>
        <div>
          <span className={styles.subtitle}>Уже есть аккаунт?</span>
          <Link
            className={styles.login_lik}
            to="/auth"
            onClick={handleDeleteError}
          >
            войдите
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
