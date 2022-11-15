import { NavLink, Outlet } from 'react-router-dom';
import './MoviesId.css';

const navMovieItems = [
    { href: 'movieId', to:'/get-movie-details', text: 'Movie Details' },
    { href: 'cast', to:'/get-movie-credits', text: 'Cast' },
    { href: 'reviews', to:'/get-movie-reviews', text: 'Reviews' }
]

// const getClassName = ({ isActive }) => {
//     return isActive ? `${styles.link} ${styles.isActive}` :
//         `${styles.link}`;  
// }

export default function MoviesId() {
    const elements = navMovieItems.map(({ href, to, text }) => {
         return (
          <li key = {href}>
            <NavLink to={href}>{text}</NavLink>
             </li>
             
        // <div>Movies Page</div>
    )   
    })
    // console.log(elements);
    return (
        <main>
        <div>
        <ul className='menu'>
            {elements}
            </ul>
            
            </div>
            <Outlet />
        </main>
    )

}


// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.