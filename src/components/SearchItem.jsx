import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const SearchItem = (cart,setCart) => {
  const {term} = useParams();
  // console.log(term)

const [filterData,setFilterData] = useState([])


useEffect(()=>
{
  const filterData = () =>{
    const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
    // console.log(data)
    setFilterData(data);
  }

  filterData()

},[term])

  return (
   <Product cart={cart} setCart={setCart} items={filterData}/>
  )
}

export default SearchItem
