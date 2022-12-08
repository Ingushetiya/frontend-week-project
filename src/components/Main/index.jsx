import React, { useEffect } from 'react';
import styles from "./Main.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../app/features/BasketSlice';
import Cart from '../Cart/index'
const Main = () => {

    const product = useSelector((state)=> state.products.products)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchProduct())
    }, [dispatch])
    
    return (
        <ul className={styles.ul}>
            {product.map(item=>{
                return(
                    <li key={item.id}><Cart 
                        {...item}
                    /></li>
                )
            })}
        </ul>
    );
};

export default Main;