import { useState } from 'react'
import { ListMovies } from '../redux/typesActions/movieList.types'
import Poster from './modal/Poster'

interface Props {
  movie: ListMovies
}

const CardMovies = ({ movie }: Props) => {
  const [showPoster, setShowPoster] = useState<boolean>(false)
  const [objectPoster, setObjectPoster] = useState<object>({})
  const handleShowPoster = (moviePoster: any | string) => {
    setShowPoster(true)
    setObjectPoster(moviePoster)
  }

  const closePoster = ():void => {
    setShowPoster(!showPoster)
  }

  return (
    <>
      <div className="mx-auto my-10 w-56">
        <img 
          src={movie.Poster}
          alt={movie.Title}
          className="h-80 w-56 rounded-xl object-cover cursor-pointer transform hover:-translate-y-2"
          onClick={() => handleShowPoster(movie.Poster)}
        />
        <h1 className="text-base font-bold m-2">
          {movie.Title}
        </h1>
        <div className="flex flex-row mx-2">
          <span className="font-normal text-sm">
            {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
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
    </>
  )
}

export default CardMovies
