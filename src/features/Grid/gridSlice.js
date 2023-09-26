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
        moveRight:(state)=>{
            const tempState = [[...state[0]],[...state[1]],[...state[2]],[...state[3]]]
            for(let i =0;i<4;i++){
                for(let j=2;j>=0;j--){
                    if(state[i][j].value !==0){
                        let k = j;
                            while(k<3 && (state[i][k+1].value ===0 || state[i][k+1].value === state[i][k].value)){
                                if(state[i][k+1].value ===0){
                                    state[i][k+1].value = state[i][k].value
                                    state[i][k].value =0
                                }
                                else{
                                    state[i][k+1].value = state[i][k+1].value*2;
                                    state[i][k].value =0
                                }
                                state[i][j].movement = state[i][j].movement+1
                                k+=1;
                            }
                    }
                }
                for(let j=1;j<3;j++){
                    if(state[i][j].movement<state[i][j-1].movement-1){
                        state[i][j].movement = state[i][j-1].movement-1;
                    }
                }
            }
            for(let i =0;i<4;i++){
                for(let j=0;j<4;j++){
                    state[i][j].value = tempState[i][j].value
                }
            }
        }    
    }
});

export const {initializeArray,moveRight} = gridSlice.actions;

export const gridArraySelector = (state) => state.grid;

export default gridSlice.reducer;