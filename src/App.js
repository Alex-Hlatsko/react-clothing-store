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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>

          {/* Routes to pages */}
          <Route path='/' element={<Home/>}/>
          <Route path='/hoodie' element={<Hoodies/>}/>
          <Route path='/t-shirts' element={<Tshirts/>}/>
          <Route path='/shoes' element={<Shoes/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

          {/* Other routes */}
          <Route path='/produkt/:id' element={<Cart/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
