import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    error: null,
    loadind: false
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
        
        const res = await fetch("http://localhost:5000/basket",{
            method: "POST",
            body: JSON.stringify({ userId: data, products: data }),
            headers: { "Content-type": "application/json" },
        })
    } catch (error) {
        
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
            state.loadind = false
            state.error = null
        })
        .addCase(fetchProduct.pending, (state, action)=>{
            state.loadind = true
            state.error = null
        })
        .addCase(fetchProduct.rejected, (state, action)=>{
            state.error = action.payload
            state.loadind = false
        })
        
    }


})

export default basketSlice.reducer