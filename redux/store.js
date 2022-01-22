import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartStore';

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;