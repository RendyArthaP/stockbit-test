import { useEffect, useState} from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../redux/store'
import { getMovieList } from '../redux/actions/movieList.actions'
import { ListMovies } from '../redux/typesActions/movieList.types'
import CardMovies from '../components/CardMovies'

const Home = () => {
  const dispatch = useDispatch()
  const movieList = useSelector((state: RootStore) => state.moviesReducers.movies)
  const [titleMovie, setTitleMovie] = useState<string>("")
  const [pagePerTitle] = useState<number>(1)

  useEffect(() => {
    dispatch(getMovieList(titleMovie, pagePerTitle))
  },[dispatch, titleMovie, pagePerTitle])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>OMDb - Movie List</title>
      </Helmet>
      
      <Layout>
        <main className="py-16 px-4">
          <input 
            className="border border-green-400 rounded-xl w-full py-2 px-4 focus:outline-none text-green-500"
            value={titleMovie}
            onChange={(e) => setTitleMovie(e.target.value)}
          />
          {movieList.length === 0
            ? 
              <h1 className="text-center font-bold text-2xl my-40 h-screen">
                You need to search first
              </h1>
            :
              <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
                {movieList.slice(0,5).map((movie: ListMovies , i: number) => (
                  <CardMovies 
                    movie = {movie}
                    key = {i}
                  />
                ))}
              </div>
          }
        </main>
      </Layout>
    </>
  )
}

export default Home
