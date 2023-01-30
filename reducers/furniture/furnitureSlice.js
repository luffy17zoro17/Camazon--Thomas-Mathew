import {createSlice } from '@reduxjs/toolkit';



const initialState= {
    value:0,
}


const furnitureSlice = createSlice({
    name: 'furniture',
    initialState,
  
    reducers: {
  
      nextFurniture:(state)=>{
        if(state.value===0 || state.value <2){
          state.value+=1;
        }
      },
      prevFurniture:(state)=>{
        if(state.value===2 || state.value>0){
           state.value-=1;
        } 
    
      }

    }
    
})    


export const selectFurniture= state=>state.furniture.value;

export const {nextFurniture, prevFurniture} = furnitureSlice.actions;

export default furnitureSlice.reducer;