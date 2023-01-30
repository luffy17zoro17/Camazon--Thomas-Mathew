import {createSlice } from '@reduxjs/toolkit';



const initialState= {
    value:0,
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
  
    reducers: {
      increment: (state) => {
    
       if(state.value <3){ 
        state.value += 1;
       } else if(state.value===3){
        state.value=0;
       }
      },
      decrement: (state) => {
       if(state.value>0){ 
        state.value -= 1;
       } else if(state.value===0) {
         state.value+=3;
       }
      },

    }
    
})    


export const selectCount= state=>state.counter.value;

export const {increment,decrement, nextDeals, prevDeals,nextRepur,prevRepur} = counterSlice.actions;

export default counterSlice.reducer;