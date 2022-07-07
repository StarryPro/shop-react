import { configureStore, createSlice } from "@reduxjs/toolkit";
import { initializeConnect } from "react-redux/es/components/connect";
import user from "./store/userSlice.js";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    count(state, action) {
      console.log(action.payload);
      let idx = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[idx].count++;
      console.log(state);
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { count, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
