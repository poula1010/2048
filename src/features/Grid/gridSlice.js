import { createSlice } from "@reduxjs/toolkit";


const initialState = new Array([]);
export const gridSlice = createSlice({
    name:"grid",
    initialState,
    reducers : {
        initializeArray:(state,action)=>{
            for(let i =0;i<4;i++){
                for(let j =0;j<0;j++){
                    state[i][j] = undefined;
                }
            }
            const initArr = action.payload;
            initArr.forEach(initObj => {
                const {row,col,value} = initObj;
                state[row][col] = value
            });
        },    
    }
});