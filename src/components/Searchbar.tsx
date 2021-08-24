import { ListMovies } from '../redux/typesActions/movieList.types';
import { Link } from 'react-router-dom';

interface Props {
  titleMovie: string;
  setTitleMovie: any | string;
  movieList: ListMovies[]
}

const Searchbar = ({ titleMovie, setTitleMovie, movieList }: Props) => {
  return (
    <div>
      <input 
        className="border border-green-400 rounded-xl w-full py-2 px-4 focus:outline-none text-green-500"
        value={titleMovie}
        onChange={(e) => setTitleMovie(e.target.value)}
        data-testid="searchBar"
        placeholder="Search"
      />
      <div>
        {titleMovie.length !== 0 && (
          <div className="mt-3 mx-1.5 overflow-hidden overflow-y-scroll h-48 block z-50 bg-white max-w-6xl border">
            {movieList.filter((movie: ListMovies) => {
              if(titleMovie === "") {
                return movie;
              } else if(
                movie.Title.toLowerCase().includes(titleMovie.toLowerCase())
              ) {
                return movie
              }
                return null;
            }).sort().map((movie: ListMovies, index: number) => (
              <Link to={`/${movie.Title}`} key={index}>
                <div className="p-2 hover:bg-green-500 hover:text-white">
                  <h1>{movie.Title}</h1>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Searchbar
