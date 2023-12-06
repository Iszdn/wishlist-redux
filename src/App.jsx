import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wishlist from './Feature/Wishlist/Wishlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products'

function App() {

  return (
    <>
  <Wishlist/>
  <Products/>
    </>
  )
}

export default App
