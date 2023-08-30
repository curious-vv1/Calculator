import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.count =
        parseFloat(action.payload.input1) + parseFloat(action.payload.input2);
    },
    subtract: (state, action) => {
      state.count =
        parseFloat(action.payload.input1) - parseFloat(action.payload.input2);
    },
    multiply: (state, action) => {
      state.count =
        parseFloat(action.payload.input1) * parseFloat(action.payload.input2);
    },
    divide: (state, action) => {
      state.count =
        parseFloat(action.payload.input1) / parseFloat(action.payload.input2);
    },
  },
});

export const { add, subtract, multiply, divide } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;
