import {  configureStore } from "@reduxjs/toolkit";
import taskReducer from "./productslice";
import popup from "./popupslice";

const store=configureStore({
    reducer:{
        task:taskReducer,
        pop:popup,
    },
});

export default store;
