import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

export const content = createSlice({
  name: "content",
  initialState: null,
  reducers: {
    read(state, action) {
      return action.payload;
    },
    bookmark(state, action) {
      const element = state.find((per) => per.title === action.payload.title);
      element.isBookmarked = action.payload.boolean;
    },
  },
});
export function selectContent(state) {
  return state.content;
}
export function GET() {
  return async (dispatch, getState) => {
    // const response = await fetch(
    //   "https://api.jsonbin.io/v3/b/6527f20212a5d376598acd8d?meta=false",
    //   {
    //     headers: {
    //       "X-Master-Key":
    //         "$2b$10$6cLxbS0BlljsHgkQ.sn7hubk3uqNerVKY6Lgek0/2vyFQF0DUKqNu",
    //     },
    //   }
    // );
    // const data = await response.json();
    dispatch(content.actions.read(data));
  };
}
export const { read, bookmark } = content.actions;
export default content.reducer;
