import { createSlice } from "@reduxjs/toolkit";
const filter = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    search(state, action) {
      return action.payload;
    },
  },
});
export const filterSelctor = (state) => state.filter;
export const { search } = filter.actions;
export default filter.reducer;
