import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'

function App() {

const [data,setData] =useState([...items]);
const [cart,setCart] = useState([]);

  return (
    <>
<Router>
<Navbar cart={cart} setData={setData}/>

  <Routes>
  <Route path='/' element={<Product items={data} cart={cart} setCart={setCart}/>} />
  <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart}/>} />
  <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart}/>}/>
  <Route path='cart' element={<Cart cart={cart}  setCart={setCart}/>}/>

  
  </Routes>
</Router>
    </>
  )
}

export default App
