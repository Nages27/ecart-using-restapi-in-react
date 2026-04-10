import { createSlice } from "@reduxjs/toolkit";

// export interface Product{
//   title:String;
//   description:String;
  

// }
const popup=createSlice({
    name:"popup",
    initialState:{
        isOpen:false,
        tempdata:null,
        update:false

    },
    reducers:{
      openpopup:(state)=>{
        state.isOpen=true;
          state.tempdata = null; 
          state.update=false;
      },

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

      }
    }
});

export const{openpopup,update,save,closePopup}=popup.actions;
export default popup.reducer;