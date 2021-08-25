import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ListMovies } from '../redux/typesActions/movieList.types';
import Poster from './modal/Poster';

interface Props {
  movie: ListMovies
}

const CardMovies = ({ movie }: Props) => {
  const [showPoster, setShowPoster] = useState<boolean>(false)
  const [objectPoster, setObjectPoster] = useState<object>({})
  const handleShowPoster = (moviePoster: object | any) => {
    setShowPoster(true)
    setObjectPoster(moviePoster)
  }

  const closePoster = ():void => {
    setShowPoster(!showPoster)
  }

  return (
    <div data-testid="cardMovies">
      <div className="mx-auto my-10 w-56">
        <img 
          src={movie.Poster}
          alt={movie.Title}
          className="h-80 w-56 rounded-xl object-cover cursor-pointer transform hover:-translate-y-2"
          onClick={() => handleShowPoster(movie.Poster)}
        />
        <BrowserRouter>
          <Link to={`/${movie.Title}`}>
            <h1 className="text-base font-bold m-2">
              {movie.Title}
            </h1>
          </Link>
        </BrowserRouter>
        <div className="flex flex-row mx-2">
          <span className="font-normal text-sm">
            {movie.Type}
          </span>
          <span className="mx-1 -mt-0.5">•</span>
          <p className="font-normal text-sm">
            {movie.Year}
          </p>
        </div>
      </div>
      {showPoster && (
        <Poster 
          objectPoster = {objectPoster}
          closePoster = {closePoster}
        />
      )}
    </div>
  )
}

export default CardMovies
