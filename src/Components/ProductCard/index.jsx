import React from 'react'
import "./index.css"
import { IoHeart } from "react-icons/io5";
import { useDispatch } from "react-redux"
import { addWishlist } from "../../Feature/Wishlist/WishlistSlice"
const ProductCard = ({id,title,description}) => {

  const dispatch=useDispatch()

  return (
    <div className='carda col-6 col-lg-3 col-md-4'>
<h1>
  {id}
  </h1>
<h2>
  {title}
  </h2>
<p>
  {description}
  </p>
  <span onClick={()=>dispatch(addWishlist({id,title,description}))}  ><IoHeart /></span>
    </div>
  )
}

export default ProductCard