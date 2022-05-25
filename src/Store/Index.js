import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/User-Reducer";

export const store = configureStore({
  reducer: { user: UserReducer },
});
