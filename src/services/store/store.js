import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "../features/content";
import filterSlice from "../features/filter";
import userSlice from "../features/user";
export default configureStore({
  reducer: {
    user: userSlice,
    content: contentSlice,
    filter: filterSlice,
  },
});
