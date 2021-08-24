import { combineReducers } from "redux";
import moviesReducers from "./movieList.reducers";
import moviesDetailReducers from "./movieDetail.reducers";

const rootReducers = combineReducers({
  moviesReducers,
  moviesDetailReducers
});

export default rootReducers;