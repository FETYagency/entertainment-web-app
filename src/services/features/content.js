import { createSlice } from "@reduxjs/toolkit";
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
    const response = await fetch("/read", { method: "GET" });
    const resp = await response.json();
    dispatch(content.actions.read(resp));
  };
}
export const { read, bookmark } = content.actions;
export default content.reducer;
