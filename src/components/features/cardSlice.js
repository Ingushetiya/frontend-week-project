import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    card: [],
    error: null,
    loading: false
};


 //надеюсь понадобится
export const getCard = createAsyncThunk("cards/fetch", async (_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:5000/card");
        const card = await res.json();

        if (card.error) {
            return thunkAPI.rejectWithValue(card.error)
        }

        return thunkAPI.fulfillWithValue(card)
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const postCard = createAsyncThunk(
    "card/post",
    async ({title, text, }, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:5000/card", {
                method: "POST",
                body: JSON.stringify({
                    
                }),
                headers: {
                    "Content-type": "application/json",
                }
            })

            const card = await res.json();

            if (card.error) {
                return thunkAPI.rejectWithValue(card.error)
            }

            return thunkAPI.fulfillWithValue(card)
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }
)

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCard.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false; 
        })
        .addCase(getCard.pending, (state, action) => {
            state.error = null;
        })
        .addCase(getCard.fulfilled, (state, action) => {
            state.card = action.payload;
            state.loading = false;
        })
        .addCase(postCard.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(postCard.pending, (state, action) => {
            state.error = null
        })
        .addCase(postCard.fulfilled, (state, action) => {
            state.card = action.payload;
            state.loading = false;
        })
    }
})

export default cardSlice.reducer;