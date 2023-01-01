import { Routes, Route, Navigate} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>

          {/* Routes to pages */}
          <Route path='/hoodie' element={<Home/>}/>
          <Route path='/t-shirts' element={<Cart/>}/>
          <Route path='/shoes' element={<Cart/>}/>
          <Route path='/about' element={<Cart/>}/>
          <Route path='/contact' element={<Cart/>}/>

          {/* Other routes */}
          <Route path='/produkt/:id' element={<Cart/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
