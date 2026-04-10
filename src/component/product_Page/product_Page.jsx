import {useEffect,useMemo} from 'react';
import { setProduct } from "../../redux/productslice";
import { useDispatch, useSelector } from "react-redux";
import './product_page.css';
import {useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
import Popup from './popup';
import { openpopup } from '../../redux/popupslice';


function Product(){
  
  
    const dispatch=useDispatch();
    const details=useSelector((state)=>state.task.items);
    const navigate=useNavigate();

     useEffect(() => {
        fetch('https://dummyjson.com/products') 
          .then(response => response.json())
          .then(data => {
            dispatch(setProduct(data.products)); 
          })
      }, []); 

      const data=useMemo(()=>{
        return details.map((t)=>(
          <div key={t.id}>
          <div className='product'>
          <div onClick={()=>navigate(`/ProductDetail/${t.id}`)} style={{cursor:"pointer"}}>
          <img src={t.images[0] }/>
          <h2>Name:{t.title}</h2>
          <div className='subproduct'>
          <h5>Price:{t.price}</h5>
          <h5>Rating:{t.rating}</h5>
          </div>
          </div>
          </div>    
          </div>  
        ));
      },[details]);


   const handleAddproduct=()=>{
    dispatch(openpopup());

  };
  
      return(
        <>
        <h2 className='title'>PRODUCTS</h2>
       <Button variant='contained' color='secondary' sx={{ marginLeft: "20px",fontWeight:"bolder",width: "100px",height: "50px"}} onClick={()=>handleAddproduct()}>ADD</Button>
        <div className="productcontainer">
        {data}
        </div>
        <Popup />
        </>
    

      );
}

export default Product;