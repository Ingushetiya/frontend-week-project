import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logIn, logOut } from "../app/features/authSlice";
import styles from "./authorization.module.scss";

const Authorization = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const handleLogIn = () => {
    dispatch(
      logIn({
        login,
        password,
      })
    ).then((data) => {
      if (!data.error) {
        navigate("/", { replace: true });
      }
    });
  };

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/", { replace: true });
    localStorage.removeItem("token");
  };

  const isAuthorization = localStorage.getItem("token");

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_block}>
        {error && <span className={styles.messageError}>{error}</span>}
        {!isAuthorization ? (
          <div className={styles.block_login}>
            {" "}
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
              войти
            </button>
            <div>
              <span className={styles.subtitle}>Нет аккаунта?</span>
              <Link className={styles.register_link} to="/registration">
                зарегистрируйся
              </Link>
            </div>{" "}
          </div>
        ) : (
          <div className={styles.logOut_block}>
            <h2>Вы хотите выйти из аккаунта?</h2>
            <button onClick={handleLogOut}>Выйти</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authorization;
