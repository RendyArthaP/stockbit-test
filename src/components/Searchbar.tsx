import { ListMovies } from "../redux/typesActions/movieList.types"
import { Link } from "react-router-dom";

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
      />
      <div>
        {titleMovie.length !== 0 && (
          <div className="absolute m-3 overflow-hidden overflow-y-scroll h-48 block z-50 bg-white w-9/12 border">
            {movieList.sort().map((movie: ListMovies, index: number) => (
              <Link 
                to={`${movie.Title}`} 
                key={index}
              >
                <div className="p-2 hover:bg-green-500 hover:text-white">
                  <h1>
                    {movie.Title}
                  </h1>
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
