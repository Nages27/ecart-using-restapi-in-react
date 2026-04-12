import { useDispatch, useSelector } from "react-redux";
import { closePopup, save } from "../../redux/popupslice";
import { useState } from "react";
import { addedProduct, updateProduct } from "../../redux/productSlice";
import { RootState } from "../../redux/store";
import CustomDialog from "../../Dialog";

interface Product {
  id: string;
  title: string;
  description: string;
  rating: string;
  price: string;
  discountPercentage: string;
  warrantyInformation: string;
  availabilityStatus: string;
  category: string;
  images: string[];
}

function Popup() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.pop.isOpen);
  const product = useSelector((state: RootState) => state.pop.tempdata);
  const isUpdate = useSelector((state: RootState) => state.pop.update);

  const [form, setForm] = useState<any>({});

  const handleClose = () => {
    dispatch(closePopup());
    setForm({});
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
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
          images: [form.image ?? product?.images?.[0]]
        })
      })
        .then(res => res.json())
        .then(updated => {
          dispatch(updateProduct(updated));
          console.log(updated);
          dispatch(closePopup());
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
          dispatch(addedProduct(data));
          console.log(data);
          dispatch(save());
          setForm({});
        });
    }
  };

  return (
    <CustomDialog
      isOpen={isOpen}
      handleClose={handleClose}
      handleChange={handleChange}
      handleSave={handleSave}
      form={form}
      product={product}
      isUpdate={isUpdate}
    />
  );
}

export default Popup;
