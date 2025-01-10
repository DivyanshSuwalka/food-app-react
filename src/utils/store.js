import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;





























/**
 * Create Store
 *  - configureStore() - import from RTK
 *
 * Provide my store to app
 *  - <Provider store={store}> - import from react-redux
 *
 * Slice
 *  - import from RTK
 *      - createSlice({
 *          name: "cart",
 *          initialState: 
 *          reducers:{
 *              addItems:(state, action)=>{state=action.payload}
 *           }
 *        });
 *  export const {addItems, removeItems, clearCart} = cartSlice.actions;
 *  export default cartSlice.reducer;
 * 
 * put slice into the store 
 *      - {
 *          reducer:{
 *              cart: cartSlice
 *                  }
 *          }
 * */
