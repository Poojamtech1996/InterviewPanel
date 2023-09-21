import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login : false,
  name : "",
  role : "",
  email : "",
  mobile :0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state,action) => {
        state.login = action.payload.login;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.mobile = action.payload.mobile;
        state.role = action.payload.role;
    },
    userLogout : (state)=>{
      state.login = false;
      state.name = "";
      state.email = "";
      state.mobile = 0;
      state.role = "";
    }
  },
})

export const { userInfo, userLogout } = userSlice.actions

export default userSlice.reducer;