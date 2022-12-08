import React, { useState } from "react";
import styles from "./Category.module.scss";
const Category = () => {
  const [isActive, setIsActive] = useState(0);
  console.log(isActive);
  const list = [
    "Бургеры",
    "Мясные блюда",
    "Салаты",
    "Супы",
    "Напитки",
  ];
  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        {list.map((item, index) => {
          return (
            <li onClick={()=>setIsActive(index)} className={isActive === index ? styles.active : ""}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
