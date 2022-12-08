import React, { useEffect } from 'react';
import styles from "./Main.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, fetchUserBasket } from '../app/features/BasketSlice';
import Cart from '../Cart/index'
const Main = () => {
    const product = useSelector((state)=> state.products.products)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct())
        dispatch(fetchUserBasket())
    }, [dispatch])
    
    return (
        <ul className={styles.ul}>
            {product.map(item=>{
                return(
                    <li key={item._id}><Cart 
                        {...item}
                    /></li>
                )
            })}
        </ul>
    );
};

export default Main;