import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice';
import wishListSlice  from './features/wishListSlice';

export const store = configureStore({
    reducer:{
        cart : cartReducer,
        wishList : wishListSlice
    }
})