import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home'
import Hoodies from './pages/Hoodies/Hoodies'
import Tshirts from './pages/Tshirts/Tshirts'
import Shoes from './pages/Shoes/Shoes'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import './App.css';
import Product from './pages/Product/Product';

function App() {

  const [data, setData] = useState();

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://raw.githubusercontent.com/Alex-Hlatsko/react-clothing-store/main/public/data.json"
          )
        ).json();
            
        // set state when the data received
        setData(data);
      };
    
      dataFetch();
    }, []);

    const dataHoodies = data?.hoodies;
    const dataShoes = data?.shoes;
    const dataTshirts = data?.tshirt;

    const [products, setProducts] = useState([])
    const addProducts = (value) =>{
      setProducts([...products, value])
    } 
    
    const deleteProduct = (id) =>{
      // setProducts(products.filter(p => p.id !== id))
    } 
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout products={products}/>}>

          {/* Routes to pages */}
          <Route path='/' element={<Home/>}/>
          <Route path='/hoodie' element={<Hoodies data={dataHoodies} addProducts={addProducts}/>}/>
          <Route path='/t-shirts' element={<Tshirts data={dataTshirts} addProducts={addProducts}/>}/>
          <Route path='/shoes' element={<Shoes data={dataShoes} addProducts={addProducts}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

          {/* Routes to product */}
          <Route path='/hoodie/product/:id' element={<Product data={dataHoodies}/>}/>
          <Route path='/t-shirts/product/:id' element={<Product data={dataTshirts}/>}/>
          <Route path='/shoes/product/:id' element={<Product data={dataShoes}/>}/>

          {/* Route to cart */}
          <Route path='/cart' element={<Cart deleteProduct={deleteProduct}/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
