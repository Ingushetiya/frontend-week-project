import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket:[],
    error: null,
    loadind: false
}

{
    products: [
        {produ, amount}
    ],
    total: number
}

const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase()
    }


})

export default basketSlice.reducer