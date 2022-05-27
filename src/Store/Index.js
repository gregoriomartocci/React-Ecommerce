import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Slices/Users/Index";
import categoriesReducer from "./Slices/Categories/Index";

export const store = configureStore({
  reducer: { users: usersReducer, categories: categoriesReducer },
});
