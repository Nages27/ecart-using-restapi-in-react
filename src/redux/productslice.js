
import {createSlice} from '@reduxjs/toolkit';


const product=createSlice({
    name:"product",
    initialState:{
        items:[]
    },
    reducers:{
        setProduct:(state,action)=>{
            state.items=action.payload;
        },
        addedProduct:(state,action)=>{
            state.items.push(action.payload);
        }
    },

});

export const {setProduct,addedProduct}=product.actions;
export default product.reducer;