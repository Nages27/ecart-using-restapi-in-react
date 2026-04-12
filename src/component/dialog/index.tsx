import {Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField} from "@mui/material";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  handleChange: (e: any) => void;
  handleSave: () => void;
  form: any;
  product: any;
  isUpdate: boolean;
};

function CustomDialog({
  isOpen,
  handleClose,
  handleChange,
  handleSave,
  form,
  product,
  isUpdate
}: Props) {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>
        {isUpdate ? "Update Product" : "Add Product"}
      </DialogTitle>

      <DialogContent>

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
          name="image"
          label="Image URL"
          value={form.image ?? product?.images?.[0] ?? ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />

      </DialogContent>

      <DialogActions>
        <Button onClick={handleSave} variant="contained">
          {isUpdate ? "Update" : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
