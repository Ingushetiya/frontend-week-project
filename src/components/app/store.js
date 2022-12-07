import { configureStore } from "@reduxjs/toolkit"
import BasketSlice from "./features/BasketSlice"

export const store = configureStore({
    reducer: {
        products: BasketSlice
    }
})
