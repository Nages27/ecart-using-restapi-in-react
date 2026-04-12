import {  configureStore } from "@reduxjs/toolkit";
import taskReducer from "./productSlice";
import popup from "./popupslice";

const store=configureStore({
    reducer:{
        task:taskReducer,
        pop:popup,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
