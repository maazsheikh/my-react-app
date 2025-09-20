import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };
const counterSlice = createSlice({
    name: 'counter',  // Name of this slice
    initialState,     // Starting state
    reducers: {
        increment: (state) => {
            state.value += 1; // Add 1
        },
        decrement: (state) => {
            state.value -= 1; // Subtract 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; // Add custom value
        },
    },
});

// Export actions to use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Export the reducer to put in the store
export default counterSlice.reducer;