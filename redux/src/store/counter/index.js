import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    show: true,
};

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.value += action.payload;
        },
        decrement(state, action) {
            state.value -= action.payload;
        },
        toggle(state) {
            state.show = !state.show;
        },
    }
});

export const counterActions = slice.actions;

// const reducer = (state = initialstate, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 counter: state.counter + action.value,
//             }
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 counter: state.counter - action.value,
//             }
//         case 'TOGGLE':
//             return {
//                 ...state,
//                 show: !state.show,
//             }
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer);

export default slice.reducer;
