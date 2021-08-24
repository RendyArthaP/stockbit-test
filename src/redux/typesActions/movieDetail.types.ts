export enum MovieDetail {
  MOVIEDETAIL_LOADING = "MOVIEDETAIL_LOADING",
  MOVIEDETAIL_SUCCESS = "MOVIEDETAIL_SUCCESS",
  MOVIEDETAIL_ERROR = "MOVIEDETAIL_ERROR"
};

export type DetailMovies = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Languange: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: boolean;
};

export interface DetailMoviesLoading {
  type: MovieDetail.MOVIEDETAIL_LOADING;
};

export interface DetailMoviesSuccess {
  type: MovieDetail.MOVIEDETAIL_SUCCESS,
  payload: DetailMovies;
};

export interface DetailMoviesError {
  type: MovieDetail.MOVIEDETAIL_ERROR;
};

export type DetailMoviesType = DetailMoviesLoading | DetailMoviesSuccess | DetailMoviesError;