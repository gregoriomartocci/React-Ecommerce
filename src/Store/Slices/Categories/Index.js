import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categoriesMap: {},
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesMap(state, action) {
      state.categoriesMap = action.payload;
    },
  },
});

export const { setCategoriesMap } = categoriesSlice.actions;
export default categoriesSlice.reducer;
