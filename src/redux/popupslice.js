import { createSlice } from "@reduxjs/toolkit";

const popup=createSlice({
    name:"popup",
    initialState:{
        isOpen:false,
        tempdata:null

    },
    reducers:{
      isOpen:(state)=>{
        state.isOpen=true;
      },

      closePopup:(state)=>{
        state.isOpen=false;   
      },

      save:(state)=>{
        state.isOpen=false;

      },
          update:(state,action)=>{
          state.tempdata=action.payload;
      }
    }
});

export const{isOpen,closePopup,save,update}=popup.actions;
export default popup.reducer;