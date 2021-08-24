import axios from "axios";
import { Dispatch } from "redux";
import {
  MovieDetail,
  DetailMoviesType
} from "../typesActions/movieDetail.types";

export const getDetailMovies = (title: string) => {
  return function(dispatch: Dispatch<DetailMoviesType>) {
    dispatch({
      type: MovieDetail.MOVIEDETAIL_LOADING
    })
    axios
      .get(`${process.env.REACT_APP_MOVIE_API}?apikey=${process.env.REACT_APP_API_KEY}&t=${title}`)
      .then((result) => dispatch({
        type: MovieDetail.MOVIEDETAIL_SUCCESS,
        payload: result.data 
      }))
      .catch((error) => dispatch({
        type: MovieDetail.MOVIEDETAIL_ERROR,
        payload: console.log(error)
      }))
  };
};