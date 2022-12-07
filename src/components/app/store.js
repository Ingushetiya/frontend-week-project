import { configureStore } from "@reduxjs/toolkit"
import BasketSlice from "../features/BasketSlice"
import UserSlice from '../features/UserSlice'

export const store = configureStore({

    reducer: { products: BasketSlice, user:UserSlice},

})
