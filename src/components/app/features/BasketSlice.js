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
export const addBasket = createAsyncThunk("product/addBasket", async (productId, thunkAPI)=>{
    try {
        const res = await fetch("http://localhost:5000/basket/add",{
            method: "PATCH",
            body: JSON.stringify({productId: productId }),
            headers: { 
                "Content-type": "application/json",
                Authorization: `Bearer ${thunkAPI.getState().user.token}`
             }
        })
        const product =  await res.json()
        if(product.error){
            thunkAPI.rejectWithValue(product.error)
        }
        return thunkAPI.fulfillWithValue(productId)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const fetchUserBasket = createAsyncThunk("userBasket/get", async (_, thunkAPI)=>{
    try {
        const res = await fetch("http://localhost:5000/basket/user",{
            method:"GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
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
export const amountBasket = createAsyncThunk("inc/amount", async({id, type}, thunkAPI)=>{
    try {
        const res = await (fetch("http://localhost:5000/basket/amount", {
            method: "PATCH", 
            body: JSON.stringify({productId: id, type: type}), 
            headers:{
                "Content-type": "application/json",
                Authorization: `Bearer ${thunkAPI.getState().user.token}`
            }       
        }))
        const amount = await res.json() 
        if(amount.error){
            thunkAPI.rejectWithValue(amount.error)
        }
        return thunkAPI.fulfillWithValue(amount)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const deleteProductBasket = createAsyncThunk("delete/product", async (data, thunkAPI)=>{
    try {
        const res = await fetch("http://localhost:5000/basket/remove", {
            method: "PATCH",
            body: JSON.stringify({productId: data}), 
            headers:{
                "Content-type": "application/json",
                Authorization: `Bearer ${thunkAPI.getState().user.token}`
            } 
        })
        const product = await res.json()
        if(res.error){
            return thunkAPI.rejectWithValue(product.error)
        }
        console.log(product);
        return thunkAPI.fulfillWithValue(product)
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
        //======================================================
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
        //=======================================================
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
            state.error = null
        })
        //=======================================================
        .addCase(addBasket.fulfilled, (state, action)=>{
            state.basket.products.push({productId: action.payload})
            state.loading = false
            state.error = null
        })
        .addCase(addBasket.pending, (state, action)=>{
            state.error = null
            state.loading = true
        })
        .addCase(addBasket.rejected, (state, action)=>{
            state.error = action.payload
            state.loading = false
        })
        //========================================================
        .addCase(amountBasket.fulfilled, (state, action)=>{
           state.basket = action.payload
           state.loading = false
           state.error = null
           })
        .addCase(amountBasket.pending, (state, action)=>{
            state.loading = true
            state.error = null
        })
        .addCase(amountBasket.rejected, (state, action)=>{
            state.error = action.payload
            state.loading = false
        })
        //=============================================================
        .addCase(deleteProductBasket.fulfilled, (state, action)=>{
            state.basket = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(deleteProductBasket.rejected, (state, action)=>{
            state.error = action.payload
            state.loading = false
        })
        .addCase(deleteProductBasket.pending, (state, action)=>{
            state.error = null
            state.loading = true
        })
    }


})

export default basketSlice.reducer