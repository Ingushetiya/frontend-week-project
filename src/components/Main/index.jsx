
import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../app/features/BasketSlice";
import Cart from "../Cart/index";

const Main = ({ index }) => {
  
  const product = useSelector((state) => state.products.products);
  const filteredProduct = product.filter((item) => {
    if (index === 0) {
      return item;
    }
    return Number(item.categoryId) === index;
  });

  console.log(filteredProduct);
  console.log(product);
  console.log(index);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <ul className={styles.ul}>
      {filteredProduct.map((item) => {
        return (
          <li key={item.id}>
            <Cart {...item} />
          </li>
        );
      })}
    </ul>
  );


};

export default Main;
