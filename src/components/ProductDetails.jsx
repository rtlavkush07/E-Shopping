import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = ({cart,setCart}) => {

  const {id} = useParams()
  const [product, setProduct] = useState({});
  const [reletedProduct,setRelatedProduct] = useState([])
useEffect(()=>{
  const filterProduct = items.filter((product)=>product.id==id)
  // console.log(filterProduct)
  setProduct(filterProduct[0])
const relatedProducts = items.filter((prd)=>prd.category===product.category)
// console.log(relatedProducts);
setRelatedProduct(relatedProducts);

},[id,product.category]) // id jab jab change hoga useeffect run hoga

const addToCart = (id, price, title, description, imgSrc) => {
  const obj = {
    id,
    price,
    title,
    description,
    imgSrc,
  };
  setCart([...cart, obj]);
  console.log("Cart element = ", cart);
  toast.success("Item added on cart", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
  return (
   <> 
     <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
   <div className="Details-container">
    <div className="img">
<img src={product.imgSrc} alt="" />
    </div>
    <div className='text-center'>
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
 <button className='btn btn-primary mx-3'>{product.price}{' ₹'}</button>
 <button

 onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
 className='btn btn-warning'>Add To Cart</button>
    </div>
   </div>
   <h1 className='text-center' style={{textDecoration: 'underline'}}>Related Products</h1>
   <Product items={reletedProduct} cart={cart} setCart={setCart} />
   </>
  )
}

export default ProductDetails
