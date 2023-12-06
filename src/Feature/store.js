import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './Wishlist/WishlistSlice'

export const store = configureStore({
  reducer: {
    wishlist:wishlistReducer
  },
})