import {createSlice } from '@reduxjs/toolkit';



const initialState= {
    value:0,
}


const GrocerySlice = createSlice({
    name: 'repurGrocery',
    initialState,
  
    reducers: {
  
      nextGrocery:(state)=>{
        if(state.value===0 || state.value <2){
          state.value+=1;
        }
      },
      prevGrocery:(state)=>{
        if(state.value===2 || state.value>0){
           state.value-=1;
        } 
    
      }

    }
    
})    


export const selectGrocery= state=>state.repurGrocery.value;

export const {nextGrocery, prevGrocery} = GrocerySlice.actions;

export default GrocerySlice.reducer;