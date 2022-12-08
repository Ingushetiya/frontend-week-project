import { configureStore } from "@reduxjs/toolkit"
import BasketSlice from "./features/BasketSlice"
import AuthSlice from './features/authSlice'

export const store = configureStore({

    reducer: { 
        products: BasketSlice, 
        user:AuthSlice
        
    }

})
