import { createSlice } from "@reduxjs/toolkit";

/** @type {{numbers: number[], odds: number[], evens: number[]}} */
const initialState = {
  numbers: [],
  odds: [],
  evens: [],
};

const numberBankSlice = createSlice({
  name: "numberbank",
  initialState,
  reducers: {
    addNumber: (state, { payload }) => {
      state.numbers.push(payload);
    },
    sortOne: (state) => {
      if (!state.numbers.length) {
        return;
      }
      if (state.numbers[0] % 2 === 0) {
        state.evens.push(state.numbers[0]);
        state.numbers.shift();
      } else {
        state.odds.push(state.numbers[0]);
        state.numbers.shift();
      }
    },
    sortAll: (state) => {
      if (!state.numbers.length) {
        return;
      }
      for (const elem of state.numbers) {
        if (elem % 2 === 0) {
          state.evens.push(elem);
        } else {
          state.odds.push(elem);
        }
      }
      state.numbers = [];
    },
  },
});

export const { addNumber, sortOne, sortAll } = numberBankSlice.actions;

export const selectNumbers = (store) => store.numberbank.numbers;
export const selectOdds = (store) => store.numberbank.odds;
export const selectEvens = (store) => store.numberbank.evens;

export default numberBankSlice.reducer;
