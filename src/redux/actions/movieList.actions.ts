import axios from "axios";
import { Dispatch } from "redux";
import {
  MovieList,
  MoviesActionType
} from "../typesActions/movieList.types";

export const getMovieList = (title: string, pages: number) => {
  return function(dispatch: Dispatch<MoviesActionType>) {
    dispatch({
      type: MovieList.MOVIE_LOADING
    })
    axios
      .get(`${process.env.REACT_APP_MOVIE_API}?apikey=${process.env.REACT_APP_API_KEY}&s=${title}&page=${pages}`)
      .then((result) => dispatch({
        type: MovieList.MOVIE_SUCCESS,
        payload: result.data.Search || []
      }))
      .catch((error) => dispatch({
        type: MovieList.MOVIE_ERROR,
        payload: console.log(error)
      }))
  }
}