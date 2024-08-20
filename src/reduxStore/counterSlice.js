import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, action) => {
            let n = parseFloat(action.payload);
            state.value += n;
        }
    }
});


export const {increment, decrement, incrementByValue} = counterSlice.actions; 
export default counterSlice.reducer;