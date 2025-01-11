import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("productId") ? 
  JSON.parse(localStorage.getItem("productId")) : 
  { productId: null };

const productIdSlice = createSlice({
  name: "productId",
  initialState,
  reducers: {
    setProductId: (state, action) => {
      state.productId = action.payload;
      localStorage.setItem("productId", JSON.stringify(state));
    },
    clearProductId: (state) => {
      state.productId = null;
      localStorage.setItem("productId", JSON.stringify(state));
    }
  },
});

export const { setProductId, clearProductId } = productIdSlice.actions;
export default productIdSlice.reducer;