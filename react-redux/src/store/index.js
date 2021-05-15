import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/index';
import authReducer from './auth/index';

const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer
    }
});

export default store;
