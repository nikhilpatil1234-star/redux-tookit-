import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/users/usersSlice"
// import counterReducer from "../features/counter/counterSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users:userReducer
  },
});
