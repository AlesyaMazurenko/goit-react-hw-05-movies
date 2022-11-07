import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Movies from '../pages/movies/Movies';
import NavBar from './NavBar/NavBar';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route path="home" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} >
            <Route path="/movies:id" element={<div>Movie Details</div>} >
              <Route path="cast" element={<div>Cast</div>} />
              <Route path="reviews" element={<div>Reviews</div>} />
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div> 
  )
}


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
