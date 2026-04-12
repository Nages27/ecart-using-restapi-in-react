
import {createSlice} from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";

 interface Product{
  id:string;
  title:string;
  description:string;
  rating:string;
  price:string;
  discountPercentage:string;
  warrantyInformation:string;
  availabilityStatus:string;
  category:string;
  images:string[];
}

interface ProductState{
  items:Product[];
}


const initialState:ProductState={
  items:[],
}


const product=createSlice({
    name:"product",
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.items=action.payload;
            // localStorage.setItem("productitems", JSON.stringify(state.items));
        },
        addedProduct:(state,action)=>{
            
           const existing = JSON.parse(localStorage.getItem("productitems") || "[]");

    localStorage.setItem(
        "productitems",
        JSON.stringify([...existing, action.payload])
    );

        },
        updateProduct: (state, action:PayloadAction<Product>) => {
  state.items = state.items.map((items) =>
    items.id === action.payload.id ? action.payload : items
  );
 localStorage.setItem("productitems", JSON.stringify(state.items));

}
    },

});

export const {setProduct,addedProduct,updateProduct}=product.actions;
export default product.reducer;
