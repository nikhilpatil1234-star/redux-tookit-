import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "rakesh" },
  { id: "1", name: "nikhil" },
  { id: "2", name: "koushik" },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
