import {createSlice } from '@reduxjs/toolkit';



const initialState= {
    value:0,
}


const dealsSlice = createSlice({
    name: 'deal',
    initialState,
  
    reducers: {
  
      nextDeals:(state)=>{
        if(state.value===0 || state.value <2){
          state.value+=1;
        }
      },
      prevDeals:(state)=>{
        if(state.value===2 || state.value>0){
           state.value-=1;
        } 
    
      }

    }
    
})    


export const selectDeal= state=>state.deal.value;

export const {nextDeals, prevDeals} = dealsSlice.actions;

export default dealsSlice.reducer;