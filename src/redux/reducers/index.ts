import { combineReducers } from "redux";
import moviesReducers from "./movieList.reducers";

const rootReducers = combineReducers({
  moviesReducers
});

export default rootReducers;