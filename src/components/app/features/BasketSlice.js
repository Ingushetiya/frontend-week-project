import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    basket: {},
    error: null,
    loading: false
}

export const  fetchProduct = createAsyncThunk("product/fetch", async(_, thunkAPI)=>{
    try {
        const res = await fetch("http://localhost:5000/product")
        const products = await res.json()
        if(products.error){
            return thunkAPI.rejectWithValue(products.error)
        }
        return thunkAPI.fulfillWithValue(products)
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const addBasket = createAsyncThunk("product/addBasket", async (data, thunkAPI)=>{
    try {
        
        await fetch("http://localhost:5000/basket",{
            method: "POST",
            body: JSON.stringify({ userId: data, products: data }),
            headers: { "Content-type": "application/json" },
        })
    } catch (error) {
        
    }
})

export const fetchUserBasket = createAsyncThunk("userBasket/get", async (_, thunkAPI)=>{
    try {
        const res = await fetch("http://localhost:5000/basket/user",{
            method:"GET",
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().user.token}`,
              },
        })
        const product = await res.json()
        if(product.error){
            return thunkAPI.rejectWithValue(product.error)
        }
        return product
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.fulfilled, (state, action)=>{
            state.products = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(fetchProduct.pending, (state, action)=>{
            state.loading = true
            state.error = null
        })
        .addCase(fetchProduct.rejected, (state, action)=>{
            state.error = action.payload
            state.loading = false
        })
        .addCase(fetchUserBasket.fulfilled, (state, action)=>{
            state.basket = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(fetchUserBasket.pending, (state, action)=>{
            state.loading = true
            state.error = null
        })
        .addCase(fetchUserBasket.rejected, (state, action)=>{
            state.error = action.payload
            state.loading = false
        })
    }


})

export default basketSlice.reducer