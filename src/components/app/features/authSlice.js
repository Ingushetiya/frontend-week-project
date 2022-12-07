import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("get/users", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const users = await res.json();
    if (users.error) {
      return thunkAPI.rejectWithValue(users.error);
    }
    return users;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk("login", async (_, thunkAPI) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
  } catch (error) {
   return thunkAPI.rejectWithValue(error)
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, actions) => {
        state.users = actions.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, actions) => {
        state.error = actions.payload;
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state, actions) => {
        state.loading = true;
        state.error = null;
      })
      //===================================
      .addCase(login.pending, (state, actions) => {
        state.loading = true,
      })
      .addCase(login.fulfilled, (state, actions) => {
        // state.token = 
      })
      .addCase(login.rejected, (state, actions) => {
        state.error = actions.payload
      });
  },
});

export default userSlice.reducer;
