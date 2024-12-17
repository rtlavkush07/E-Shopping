import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Cart from './Cart'
import { items } from './Data'

const Navbar = ({setData,cart}) => {

  const location = useLocation()

  const [searchTerm,setSearchTerm] =useState("");
  const navigate = useNavigate();
 const handleSubmit = (e) =>
 {
  e.preventDefault();
navigate(`/search/${searchTerm}`)
setSearchTerm("");
 }
  const fileterBy = (category) =>{
 const elements = items.filter((product) => product.category===category)

//  console.log(elements)
setData(elements)
  }


  // for price by sorting
  const filterByPrice = (price) =>{
    const elements = items.filter((product)=>product.price>=price)

    setData(elements)
  }

  return (
<>

<header className='sticky-top'>
<div className="header" >
    <Link to={'/'} className="logo">E-Cart</Link>
    
    
    <form 
    className="search"
    onSubmit={handleSubmit}
    >  
        <input 
        onChange={(e)=>setSearchTerm(e.target.value)}
        value={searchTerm}
        type="text" 
        placeholder='Search The Items'
        
        
         />
         </form>



        <Link to={'/cart'} className="cart">
        <button type="button" className="btn btn-primary position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
 
</div>
{
  location.pathname == '/' &&(
<div className="nav-bar-wrapper">
    <div oclassName="items" style={{cursor: 'pointer'}}>Filter by {'>'}</div>
    <div onClick={()=>setData(items)} className="items" style={{cursor: 'pointer'}}>Home</div>
    <div onClick={()=>fileterBy('mobiles')} className="items" style={{cursor: 'pointer'}}>Mobiles</div>
    <div onClick={()=>fileterBy('laptops')} className="items" style={{cursor: 'pointer'}}>Laptops</div>
    <div onClick={()=>fileterBy('tablets')} className="items" style={{cursor: 'pointer'}}>Tablets</div>
    <div onClick={()=>filterByPrice(29999)} className="items" style={{cursor: 'pointer'}}>{'>='}29999</div>
    <div onClick={()=>filterByPrice(49999)} className="items" style={{cursor: 'pointer'}}>{'>='}49999</div>
    <div onClick={()=>filterByPrice(69999)} className="items" style={{cursor: 'pointer'}}>{'>='}69999</div>
    <div onClick={()=>filterByPrice(89999)} className="items" style={{cursor: 'pointer'}}>{'>='}89999</div>
</div>

  )
}

</header>
</>
  )
}

export default Navbar
