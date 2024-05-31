import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    image: ""
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;