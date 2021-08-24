import {
  MovieDetail,
  DetailMovies,
  DetailMoviesType
} from "../typesActions/movieDetail.types";

interface InitialStateI {
  loading: boolean;
  movieDetails?: DetailMovies;
}

const initialState: InitialStateI = {
  loading: false
}

const moviesDetailReducers = (state = initialState, action: DetailMoviesType): InitialStateI => {
  switch(action.type) {
    case MovieDetail.MOVIEDETAIL_LOADING: 
      return {
        loading: true
      }
    case MovieDetail.MOVIEDETAIL_SUCCESS:
      return {
        loading: false,
        movieDetails: action.payload
      }
    case MovieDetail.MOVIEDETAIL_ERROR:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default moviesDetailReducers;