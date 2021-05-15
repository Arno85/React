import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notification: null
};

const slice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const rootActions = slice.actions;

export default slice.reducer;