import { NavLink, Outlet } from 'react-router-dom';
import styles from './Movies.css'

const navMovieItems = [
    { href: 'movieId', to:'/get-movie-details', text: 'Movie Details' },
    { href: 'cast', to:'/get-movie-credits', text: 'Cast' },
    { href: 'reviews', to:'/get-movie-reviews', text: 'Reviews' }
]

const getClassName = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.isActive}` :
        `${styles.link}`;  
}

export default function Movies() {
    const elements = navMovieItems.map(({ href, to, text }) => {
         return (
          <li key = {href}>
            <NavLink to={to} end>{text}</NavLink>
          </li>
        // <div>Movies Page</div>
    )   
    })

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )

}


// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.