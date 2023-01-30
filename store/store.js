import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '@/reducers/counter/counterSlice';
import dealsReducer from "../reducers/deals/dealsSlice";
import repurchaseReducer from '@/reducers/repurchase/repurchaseSlice';
import repurchaseGroceryReducer from '@/reducers/repurchase/repurchaseGrocerySlice';
import furnitureReducer from '@/reducers/furniture/furnitureSlice';

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    deal:dealsReducer,
    repur:repurchaseReducer,
    repurGrocery:repurchaseGroceryReducer,
    furniture:furnitureReducer,
  },
});
