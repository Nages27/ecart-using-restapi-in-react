import { createSlice } from "@reduxjs/toolkit";

export interface Product{
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

interface popup{
  isOpen:boolean,
  tempdata:Product,
  update:boolean
}

const initialProduct : Product={
id: "",
  title: "",
  description: "",
  rating: "",
  price: "",
  discountPercentage:"",
  warrantyInformation: "",
  availabilityStatus: "",
  category: "",
  images: []
}
const initialState : popup ={
  isOpen:false,
  tempdata:initialProduct,
  update:false
};
const popup=createSlice({
    name:"popup",
    initialState,
    reducers:{
    
      closePopup:(state)=>{
        state.isOpen=false;   
      },

      save:(state)=>{
        state.isOpen=false;

      },
          update:(state,action)=>{
          state.isOpen = true;
          state.tempdata=action.payload;
          state.update=true;

      },
      open:(state)=>{
         state.isOpen=true;
         state.tempdata=initialProduct;
         state.update=false;
      }
    }
});

export const{update,save,closePopup,open}=popup.actions;
export default popup.reducer;
