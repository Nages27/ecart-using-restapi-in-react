import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { closePopup, save } from "../../redux/popupslice";
import { useState,useEffect } from "react";
import { addedProduct, updateProduct } from "../../redux/productslice";
import { RootState } from "../../redux/store";

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
  image:string
}

function Popup() {

  const dispatch = useDispatch();
  // const [open, setOpen] = useState(false)

  const isOpen = useSelector((state : RootState) => state.pop.isOpen);
  const product = useSelector((state : RootState) => state.pop.tempdata);
  const isUpdate =useSelector((state : RootState)=>state.pop.update);
   
  
  const [form, setForm] = useState<Partial<Product>>({});

  const handleClose = () => {
    dispatch(closePopup());
    // setOpen(false)
    setForm({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value}));
  };


  const handleSave = () => {

    if (isUpdate) {
      fetch(`https://dummyjson.com/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title ?? product.title,
          price: Number(form.price ?? product.price),
          rating: Number(form.rating ?? product.rating),
          discountPercentage: Number(form.discountPercentage ?? product.discountPercentage),
          category: form.category ?? product.category,
          warrantyInformation: form.warrantyInformation ?? product.warrantyInformation,
          availabilityStatus: form.availabilityStatus ?? product.availabilityStatus,
          images: [form.image ?? product.image ?.[0]]
        })
      })
        .then(res => res.json())
        .then(updated => {
           console.log("UPDATED PRODUCT:", updated); 
          dispatch(updateProduct(updated));
          dispatch(closePopup());
          // setOpen(false)
          setForm({});
        });

    } else {
   
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          price: Number(form.price),
          rating: Number(form.rating),
          discountPercentage: Number(form.discountPercentage),
          category: form.category,
          warrantyInformation: form.warrantyInformation,
          availabilityStatus: form.availabilityStatus,
          images: [form.image]
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log("NEW PRODUCT:", data);
          dispatch(addedProduct(data));
          dispatch(save());
          // setOpen(false)
          setForm({});
        });
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} >

      <DialogTitle>
        {isUpdate ? "Update Product" : "Add Product"}
      </DialogTitle>

      <DialogContent>
        <div className="popup">

          <TextField
            name="title"
            label="Title"
            value={form.title ?? product?.title ?? ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            name="price"
            label="Price"
            value={form.price ?? product?.price ?? ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            name="rating"
            label="Rating"
            value={form.rating ?? product?.rating ?? ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            name="discountPercentage"
            label="Discount"
            value={form.discountPercentage ?? product?.discountPercentage ?? ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            name="category"
            label="Category"
            value={form.category ?? product?.category ?? ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            name="warrantyInformation"
            label="Warranty"
            value={form.warrantyInformation ?? product?.warrantyInformation ?? ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            name="availabilityStatus"
            label="Availability"
            value={form.availabilityStatus ?? product?.availabilityStatus ?? ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            name="images"
            label="Image URL"
            value={form.image ?? product?.image ?.[0] ?? ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleSave} variant="contained">
          {isUpdate ? "Update" : "Save"}
        </Button>
      </DialogActions>

    </Dialog>
  );
}

export default Popup;