import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    search: searchReducer,
  },
});

export default store;
