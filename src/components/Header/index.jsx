import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBasket } from "../app/features/BasketSlice";

const Header = () => {
  const userName = useSelector((state) => state.user.userName);
  const basket = useSelector((state) => state.products.basket);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserBasket());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/">
            <img
              className={styles.logo}
              width={50}
              height={50}
              src={"assets/logo.png"}
              alt="logo"
            />
          </Link>
          <div className={styles.adress}>
            <div className={styles.input}>
              <img
                className={styles.location}
                width={16}
                height={18}
                src="assets/location.png"
                alt="location"
              />
              <input
                className={styles.search}
                type={"search"}
                placeholder="Введите адрес доставки . . ."
              />
              <img
                width={18}
                height={18}
                src="assets/Search.svg"
                alt="search"
              />
            </div>
            <div className={styles.contact}>
              <div className={styles.call}>
                <img
                  width={16}
                  height={16}
                  src="assets/Calling.png"
                  alt="calling"
                />
              </div>

              <p>
                Контакты: <br /> <span>+7 (928) 695-30-59</span>
              </p>
            </div>
          </div>
          <Link to="/auth">
            <div className={styles.auth}>
              <div className={styles.line_auth}></div>
              <img src="assets/authlogo.svg" alt="authlogo" />
              <span>{userName ? userName : "Войти"}</span>
              <div className="user"></div>
            </div>
          </Link>

         
            <Link to="/basket">
              <div className={styles.basket}>
                <span>Корзина</span>
                <div className={styles.line}></div>
                <div className={styles.quantity}>
                  <span>{basket.products?.length}</span>
                </div>
              </div>
            </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
