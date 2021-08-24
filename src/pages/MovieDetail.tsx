import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { getDetailMovies } from '../redux/actions/movieDetail.actions'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from '../redux/store';
import { Link } from 'react-router-dom';

const MovieDetail = () => {
  const dispatch = useDispatch()
  const { title }: any = useParams()
  const detailMovie = useSelector((state: RootStore) => state.moviesDetailReducers.movieDetails)
  
  console.log(detailMovie);
  useEffect(() => {
    dispatch(getDetailMovies(title))
  }, [dispatch, title])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{detailMovie?.Title}</title>
      </Helmet>

      <Layout>
        <main className="px-4">
          <div className="py-10 md:h-screen">
            <Link to="/">
              <span className="text-xl font-bold">
                Back
              </span>
              <div className="flex flex-col items-center my-10 md:flex-row ">
                <img 
                  src={detailMovie?.Poster}
                  alt={detailMovie?.Title}
                  className="object-cover rounded-xl w-80 mx-auto h-96"
                />
                <div className="flex flex-col md:ml-4 md:w-1/2">
                  <h1 className="font-bold text-2xl my-1">
                    {detailMovie?.Title}
                  </h1>
                  <div className="flex flex-wrap my-1">
                    <h1 className="font-bold text-base">
                      Actors:
                    </h1>
                    <span className="font-normal md:mx-1">{detailMovie?.Actors}</span>
                  </div>
                  <div className="flex flex-wrap my-1">
                    <h1 className="font-bold text-base">
                      Directors:
                    </h1>
                    <span className="font-normal md:mx-1">{detailMovie?.Director}</span>
                  </div>
                  <div className="flex flex-wrap my-1">
                    <h1 className="font-bold text-base">
                      Ratings:
                    </h1>
                    <span className="font-normal md:mx-1">
                      {detailMovie?.Ratings.length === 0 
                        ? 
                          "N/A" 
                        : 
                          detailMovie?.Ratings[0].Value
                      }
                    </span>
                  </div>
                  <div className="flex my-1">
                    <h1 className="font-bold text-base">
                      Showing At:
                    </h1>
                    <span className="font-normal mx-1">{detailMovie?.Country}</span>
                  </div>
                  <div className="flex my-1">
                    <h1 className="font-bold text-base">
                      Type:
                    </h1>
                    <span className="font-normal mx-1">{detailMovie?.Type}</span>
                  </div>
                  <div className="flex my-1">
                    <h1 className="font-bold text-base">
                      Released:
                    </h1>
                    <span className="font-normal mx-1">{detailMovie?.Released}</span>
                  </div>
                  <div className="flex my-1">
                    <h1 className="font-bold text-base">
                      Duration:
                    </h1>
                    <span className="font-normal mx-1">{detailMovie?.Runtime}</span>
                  </div>
                  <div className="flex my-1">
                    <h1 className="font-bold text-base">
                      Genre:
                    </h1>
                    <span className="font-normal mx-1">{detailMovie?.Genre}</span>
                  </div>
                  <div className="flex my-1">
                    <h1 className="font-bold text-base">
                      Awards:
                    </h1>
                    <span className="font-normal mx-1">{detailMovie?.Awards}</span>
                  </div>
                  <div className="flex my-1">
                    <h1 className="font-bold text-base">
                      Rated:
                    </h1>
                    <span className="font-normal mx-1">{detailMovie?.Rated}</span>
                  </div>
                  <div className="flex my-1">
                    <h1 className="font-bold text-base">
                      IMDB Rating:
                    </h1>
                    <span className="font-normal mx-1">{detailMovie?.imdbRating}</span>
                  </div>
                  <div className="flex flex-wrap my-1">
                    <h1 className="font-bold text-base">
                      Descriptions:
                    </h1>
                    <span className="font-normal">{detailMovie?.Plot}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default MovieDetail
