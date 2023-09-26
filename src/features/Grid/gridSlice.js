import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    [{value:0,movement:0},{value:0,movement:0},{value:0,movement:0},{value:0,movement:0}],
    [{value:0,movement:0},{value:0,movement:0},{value:0,movement:0},{value:0,movement:0}],
    [{value:0,movement:0},{value:0,movement:0},{value:0,movement:0},{value:0,movement:0}],
    [{value:0,movement:0},{value:0,movement:0},{value:0,movement:0},{value:0,movement:0}]
];
export const gridSlice = createSlice({
    name:"grid",
    initialState,
    reducers : {
        initializeArray:(state,action)=>{
            const initArr = action.payload;
            initArr.forEach(initObj => {
                const {row,col,value} = initObj;
                state[row][col] = {value:value,movement:0}
            });
        },    
    }
});

export const {initializeArray} = gridSlice.actions;

export const gridArraySelector = (state) => state.grid;

export default gridSlice.reducer;