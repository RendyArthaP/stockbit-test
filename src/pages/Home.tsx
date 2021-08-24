import { useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../redux/store'
import { getMovieList } from '../redux/actions/movieList.actions'
import { ListMovies } from '../redux/typesActions/movieList.types'
import CardMovies from '../components/CardMovies'
import Searchbar from '../components/Searchbar'

const Home = () => {
  const dispatch = useDispatch()
  const anchor = useRef<any>(null)
  const movieList = useSelector((state: RootStore) => state.moviesReducers.movies)
  const [titleMovie, setTitleMovie] = useState<string>("")
  const [fetchAllPerPage, setFetchAllPerPage] = useState<number>(5)
  const [pagePerTitle, setPagePerTitle] = useState<number>(1)

  useEffect(() => {
    dispatch(getMovieList(titleMovie, pagePerTitle))

    window.addEventListener('scroll', () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if(scrolled === scrollable) {
        setFetchAllPerPage(prev => prev + 5)
        setPagePerTitle(prev => prev + 1)
      }
    })
    
  },[dispatch, titleMovie, pagePerTitle])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>OMDb - Movie List</title>
      </Helmet>
      
      <Layout>
        <main className="py-16 px-4">
          <Searchbar 
            titleMovie = {titleMovie}
            setTitleMovie = {setTitleMovie}
            movieList = {movieList}
          />
          {titleMovie.length === 0
            ? 
              <h1 className="text-center font-bold text-2xl my-40 h-screen">
                You need to search first
              </h1>
            :
              <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
                {movieList.filter((movie: ListMovies) => {
                  if(titleMovie === "") {
                    return movie;
                  } else if(
                    movie.Title.toLowerCase().includes(titleMovie.toLowerCase())
                  ) {
                    return movie;
                  } 
                    return null;
                }).slice(0, fetchAllPerPage).map((movie: ListMovies, i: number) => (
                    <CardMovies 
                      movie = {movie}
                      key = {i}
                    />
                ))}
                <div ref={anchor}/>
              </div>
          }
        </main>
      </Layout>
    </>
  )
}

export default Home
