import { configureStore } from "@reduxjs/toolkit";
import counterRedeucer from "./features/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterRedeucer
    }
})