import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/index';
import cartReducer from './cart/index';
import rootReducer from './root/index';

const store = configureStore({
    reducer: {
        root: rootReducer,
        products: productsReducer,
        cart: cartReducer,
    }
});

export default store;