import { Button, Dialog ,DialogActions,DialogContent,DialogTitle, TextField} from "@mui/material";
import { useDispatch,useSelector} from "react-redux";
import { closePopup,save } from "../../redux/popupslice";
import { useState } from "react";
import { addedProduct } from "../../redux/productslice";

function Popup(){

const [title,setTitle]=useState("");
const dispatch=useDispatch();
const isOpen=useSelector((state)=>state.pop.isOpen);



const handleClose=()=>{
    dispatch(closePopup());
}


const handleSave=()=>{
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title  
    })
  })
  .then(res => res.json())
  .then(data => {
   dispatch(save());
   console.log(data);
   dispatch(addedProduct(data));
  })
  
};

return(
    <Dialog open={isOpen} onClose={()=>handleClose()}>
        <DialogTitle>Add Products</DialogTitle>
        <DialogContent>
      <TextField
      label="title"
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
      fullWidth
      margin="normal"
        />
        </DialogContent>
        <DialogActions >
        <Button onClick={()=>handleSave()}>Save</Button>
        </DialogActions>
    </Dialog>
)
}

export default Popup;