import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        {
            id: 1,
            title: 'Product 1',
            price: 6.00,
            description: 'This is the product 1',
        },
        {
            id: 2,
            title: 'Product 2',
            price: 18.00,
            description: 'This is the product 2',
        },
        {
            id: 3,
            title: 'Product 3',
            price: 24.35,
            description: 'This is the product 3',
        },
    ]
}

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export const productsActions = slice.actions;

export default slice.reducer;