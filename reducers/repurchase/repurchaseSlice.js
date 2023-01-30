import {createSlice } from '@reduxjs/toolkit';



const initialState= {
    value:0,
}


const repurSlice = createSlice({
    name: 'repur',
    initialState,
    reducers:{
      nextRepur:(state)=>{
        if(state.value===0 || state.value <1){
          state.value+=1;
        }
      },
      prevRepur:(state)=>{
        if(state.value===1 || state.value>0){
           state.value-=1;
        } 
      }

    }
    
})    


export const selectRepur= state=>state.repur.value;

export const {nextRepur,prevRepur} = repurSlice.actions;

export default repurSlice.reducer;