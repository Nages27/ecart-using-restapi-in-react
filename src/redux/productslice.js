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
        },
        updateProduct: (state, action) => {
  state.items = state.items.map((item) =>
    item.id === action.payload.id ? action.payload : item
  );
}
    },

});

export const {setProduct,addedProduct,updateProduct}=product.actions;
export default product.reducer;