import { configureStore } from "@reduxjs/toolkit";
import numberBankReducer from "../features/numberBankSlice";

const store = configureStore({
    reducer: {
        numberbank: numberBankReducer,
    },
});

export default store; 