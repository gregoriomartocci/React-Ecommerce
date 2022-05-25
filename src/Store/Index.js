import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./User/User-Reducer";

export const store = configureStore({
  reducer: { users: usersReducer },
});
