import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  userName: null,
  loading: false,
  error: null,
  signingUp: false,
  signingIn: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/registration", {
        method: "POST",
        body: JSON.stringify({ login, password }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      const json = await res.json();
      if (json.error) {
        console.log(json.error);
        return thunkAPI.rejectWithValue(json.error);
      }
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const fetchUser = createAsyncThunk("get/users", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const users = await res.json();
    console.log(users);
    if (users.error) {
      return thunkAPI.rejectWithValue(users.error);
    }
    return users;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const logIn = createAsyncThunk(
  "login",
  async ({ login, password }, thunkAPI) => {
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
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      console.log(data);
      localStorage.setItem("token", data.token);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.userName = null;
    },
    deleteError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      //===================================
      .addCase(logIn.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.userName = action.payload.login;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(authSignUp.pending, (state) => {
        state.error = null;
        state.signingUp = true;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signingUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.signingUp = false;
        state.error = null;
        state.message = action.payload.message;
      });
  },
});

export default userSlice.reducer;
export const { logOut, deleteError } = userSlice.actions;
