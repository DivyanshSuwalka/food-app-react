import { createSlice } from "@reduxjs/toolkit";
import { count } from "console";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// cartSlice = {
//   actions: {
//     addItem,
//     removeItem,
//     clearCart,
//   },
//   reducer: reducers,
// };
