import {
  MovieList,
  ListMovies,
  MoviesActionType
} from "../typesActions/movieList.types";

interface InitialStateI {
  loading: boolean;
  movies: ListMovies[];
};

const initialState: InitialStateI = {
  loading: false,
  movies: []
};

const moviesReducers = (state = initialState, action: MoviesActionType): InitialStateI => {
  switch(action.type) {
    case MovieList.MOVIE_LOADING: 
      return {
        ...state,
        loading: true
      }
    case MovieList.MOVIE_SUCCESS:
      return {
        loading: false,
        movies: [
          ...state.movies,
          ...action.payload
        ]
      }
    case MovieList.MOVIE_ERROR:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default moviesReducers