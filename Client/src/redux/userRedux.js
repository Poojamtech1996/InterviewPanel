import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data  : []
}

export const dataSlice = createSlice({
  name: 'getData',
  initialState,
  reducers: {
    setDataRedux: (state,action) => {
        state.data = action.payload;
    },
  },
})

export const { setDataRedux } = dataSlice.actions;

export default dataSlice.reducer;