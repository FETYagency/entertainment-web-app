import { createSlice } from "@reduxjs/toolkit";
export const content = createSlice({
  name: "content",
  initialState: {
    loading: "idle",
    content: null,
  },
  reducers: {
    read(state, action) {
      state.content = action.payload;
    },
    bookmark(state, action) {
      const element = state.content.find(
        (per) => per.title === action.payload.title,
      );
      element.isBookmarked = action.payload.boolean;
    },
    setLoader(state, action) {
      state.loading = action.payload;
    },
  },
});
export function selectContent(state) {
  return state.content.content;
}
export function selectStatus(state) {
  return state.content.loading;
}
export function GET() {
  return async (dispatch, getState) => {
    const response = await fetch("/read", { method: "GET" });
    const resp = await response.json();
    if (resp) {
      dispatch(content.actions.read(resp));
      dispatch(content.actions.setLoader("success"));
    }
  };
}
export const { read, bookmark } = content.actions;
export default content.reducer;
