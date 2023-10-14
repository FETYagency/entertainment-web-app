import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "../features/content";
import filterSlice from "../features/filter"
export default configureStore({
  reducer: {
    content: contentSlice,
    filter:filterSlice
  },
});
