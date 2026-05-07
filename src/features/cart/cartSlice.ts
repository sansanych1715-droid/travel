import type { Tour } from "@/shared/api/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "@/shared/types";

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Tour>) {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
