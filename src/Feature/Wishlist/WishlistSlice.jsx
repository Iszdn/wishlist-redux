import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[]
}
export const wishlistSlice=createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addWishlist:(state,action)=>{
            const { id } = action.payload;

            const existingWish = state.value.find((wish) => wish.id === id);
      
            if (!existingWish) {
              state.value.push(action.payload);
            }
          
        },
        deleteWish:(state,action)=>{
            state.value=state.value.filter(wish=>wish.id!==action.payload.id)
        },
        

    }
})
export const {addWishlist,deleteWish}=wishlistSlice.actions
export default wishlistSlice.reducer    