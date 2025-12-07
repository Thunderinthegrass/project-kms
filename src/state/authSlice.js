import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../api/api";

const initialState = {
  userId: null,
  login: null,
  email: null,
  // isAuth: 1,
  isAuth: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunkCreatorSlice.fulfilled, (state, action) => {
        state.isAuth = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userId = action.payload.userId;
        state.login = action.payload.login;
        state.email = action.payload.email;
        state.isAuth = action.payload.isAuth;
      });
  },
});

export const fetchUserData = createAsyncThunk("auth/userDataThunkCreatorSlice", async (_, { rejectWithValue }) => {
  try {
    const response = await authAPI.getUserData();
    if (response.data.resultCode === 0) {
      const data = response.data;
      return {
        userId: data.data.id,
        login: data.data.login,
        email: data.data.id,
        isAuth: true,
      }
    } else {
        return rejectWithValue(response.data.messages[0] || 'Authentication failed');
      }
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

// вариант с then:
// export const fetchUserData = createAsyncThunk(
//   "auth/userDataThunkCreatorSlice",
//   () => {
//     return authAPI.getUserData().then((response) => {
//       if (response.data.resultCode === 0) {
//         const data = response.data;
//         return {
//           userId: data.data.id,
//           login: data.data.login,
//           email: data.data.id,
//           isAuth: true,
//         };
//       }
//     });
//   }
// );

export const loginThunkCreatorSlice = createAsyncThunk(
  "auth/loginThunkCreatorSlice",
  (email, password, rememberMe) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      console.log("данные из loginThunkCreator authSlice: ", response.data);
      console.log(email);
      console.log(password);
      console.log(rememberMe);
    });
  }
);

export const authReducer = authSlice.reducer;
