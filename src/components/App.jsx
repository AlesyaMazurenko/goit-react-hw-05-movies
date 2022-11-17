import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { lazy } from 'react';
// import MoviesId from '../pages/moviesId/MoviesId';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import {Cast} from 'pages/MovieDetails/Cast/Cast'
// import Rewievs from 'pages/MovieDetails/Review/Review';
// import Movie from 'pages/Movie/Movie';

const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('../pages/MovieDetails/Review/Review'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <div className='App'>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        {/* <Suspense> */}
        <Route path="/" element={<Layout /> }> 
        
          <Route index element={<HomePage />} />

          <Route path="movies" element={<Movie />} />
              
            <Route path="movies/:id" element={<MovieDetails />} >
             {/* <Suspense fallback={<div>Loading...</div>}> */}
               <Route path="cast" element={<Cast />} />
              
              <Route path="reviews" element={<Reviews />} />
              {/* </Suspense>  */}
            </Route>
           
        
        </Route>
          <Route path='*' element={<NotFoundPage />} />
           {/* </Suspense> */}
      </Routes>
     
    <Outlet />
    </div> 
  )
}

