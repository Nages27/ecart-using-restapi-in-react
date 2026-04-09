import Product from './component/product_Page/product_Page';
import { Route,Routes } from 'react-router-dom';
import ProductDetail from './component/product_Page/ProductDetail';
import Popup from './component/product_Page/popup';

function App(){
  return (
<div className="app">
  <Routes>
    <Route path='/' element={<Product />} />
    <Route path='/ProductDetail/:id' element={<ProductDetail />} />
     <Route path='/Product' element={<Product />} />
     <Route path='/Popup' element={<Popup />}></Route>
  </Routes>
</div>
  )
}

export default App;