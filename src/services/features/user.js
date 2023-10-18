import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const validation = createAsyncThunk("user/init", async (draft) => {
  let req;
  let resp;
  if (draft.type === "login")
    req = await fetch("/login", {
      method: "post",
      body: JSON.stringify(draft.body),
    });
  if (draft.type === "signup")
    req = await fetch("/signup", {
      method: "post",
      body: JSON.stringify(draft.body),
    });
  console.log(req.ok);
  if (req.ok) {
    resp = await req.json();
    return resp;
  } else {
    throw new Error("email or password is incorrect");
  }
});
const user = createSlice({
  name: "user",
  initialState: "idle",
  reducers: {
    reInitLoader() {
      return "idle";
    },
  },
  extraReducers: (build) => {
    build
      .addCase(validation.pending, () => {
        return "pending";
      })
      .addCase(validation.fulfilled, () => {
        return "success";
      })
      .addCase(validation.rejected, () => {
        return "failed";
      });
  },
});
export const { reInitLoader } = user.actions;
export default user.reducer;
