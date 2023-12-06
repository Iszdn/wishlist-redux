import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
const [data, setData] = useState([])
function datalar() {
    fetch("https://northwind.vercel.app/api/categories").then((res) => res.json())
    .then((items) => setData(items));
}
useEffect(() => {
    datalar();
  }, []);
  return (

    <div className='row'>
        <h1>Products</h1>
{
    data && data.map((x)=>(
        <ProductCard 
        key={x.id}
        id={x.id}
        title={x.name}
        description={x.description}
        />
    ))
}
    </div>
  )
}

export default Products