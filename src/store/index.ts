import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todosSlice.reducer,
  },
});
