import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { deleteWish } from './WishlistSlice';
const Wishlist = () => {
  const wishlistArr=useSelector(state=>state.wishlist.value)
  const dispatch=useDispatch()
  console.log(wishlistArr);
  return (
    <>
   <h1>Wishlist</h1>
    {
      wishlistArr && wishlistArr.map((x)=>(
        <ul key={x.id}>
          <li>{x.id}</li>
          <li>{x.title}</li>
          <li>{x.description}</li>
          <span onClick={() => dispatch(deleteWish({ id: x.id }))}><MdDelete /></span>
        </ul>
      ))  
    }

    </>
  )
}

export default Wishlist