import React from 'react'
import { ListMovies } from '../redux/typesActions/movieList.types'

interface Props {
  movie: ListMovies
}

const CardMovies = ({ movie }: Props) => {
  console.log(movie);
  return (
    <div>
      <h1>
        {movie.Title}
      </h1>
    </div>
  )
}

export default CardMovies
