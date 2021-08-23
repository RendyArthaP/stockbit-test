export enum MovieList {
  MOVIE_LOADING = "MOVIE_LOADING",
  MOVIE_SUCCESS = "MOVIE_SUCCESS",
  MOVIE_ERROR = "MOVIE_ERROR"
};

export type ListMovies = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export interface MovieLoading {
  type: MovieList.MOVIE_LOADING;
};

export interface MovieSuccess {
  type: MovieList.MOVIE_SUCCESS;
  payload: ListMovies[];
};

export interface MovieError {
  type: MovieList.MOVIE_ERROR;
};

export type MoviesActionType = MovieLoading | MovieSuccess | MovieError;