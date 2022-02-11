import { combineReducers } from "redux";
import posts from "./posts";
export const reducers = combineReducers({
  posts,
});
//index.js in redux is to combine all the reducer inthe app using combineReducer and export it
