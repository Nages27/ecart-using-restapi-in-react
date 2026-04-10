import './product_page.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Popup from './component/product_Page/popup';
import { update } from '../../redux/popupslice';


function ProductDetail() {
  const [data, setData] = useState(null);
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);

  const handleDelete = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log("deleted Successfully");
        navigate("/Product");
      });
  };

  const handlebackward = () => {
    navigate("/Product");

  }

  const handleUpdate = (data) => {
     dispatch(update(data));

  }

  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Button variant="contained" color='primary' onClick={() => { handlebackward() }} sx={{ margin: "30px" }}>Back</Button>
      <div className="product-detail">
        <img src={data?.images?.[0]} alt={data?.title} />
        <div className='subproductdetail'>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <h3>Price: {data.price}</h3>
          <h3>Rating: {data.rating}</h3>
          <h3>Category: {data.category}</h3>
          <h3>Discounting Percentage: {data.discountPercentage}</h3>
          <h3>WarrantyInformation: {data.warrantyInformation}</h3>
          <h3>AvailabilityStatus: {data.availabilityStatus}</h3>
          <div className='bt'>
          <Button color="secondary" size="medium" variant="contained" onClick={() => handleDelete(data.id)} >Delete</Button>
          <Button color="secondary" size="medium" variant="contained" onClick={() => handleUpdate(data)} >Update</Button>
          </div>
         
        </div>
      </div>
      <Popup />
    </>
  );
}


export default ProductDetail;