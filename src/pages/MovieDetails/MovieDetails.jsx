import React, { useEffect, useState } from "react";   
import { getMovieById } from 'api/Api';
import { useParams, useNavigate, Outlet } from 'react-router';
import { NavLink } from "react-router-dom";
import './MovieDetails.css';

export const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const result = await getMovieById(id);
                setMovie(result);
                console.log(result);
            } catch (error) {
                setError(error);
            }
        }
        fetchMovie();
    }, [id])

    const getActiveClass = ({ isActive }) => {
  return isActive ? `film-link active` : `film-link`;
    }
    
    const IMAGE_URL = 'https://images.tmdb.org/t/p/w500';
    console.log(movie);
    return (
        <main>
            {movie &&
                <div className="film-wrapper">
                    <img className="film-poster" src={`${IMAGE_URL}${movie.poster_path}`} alt="" />
                    <div className="film-description">
                        <p>{movie.original_title}</p>
                        <p>Overview: <span>{movie.overview}</span></p>
                        <p>Release date: <span className="film-description_span">{movie.release_date}</span></p>
                        <p>Rating: <span className="film-description_span">{ movie.vote_average}</span></p>
                    </div>
                
                    {/* Details of movie {movie.original_title}
                     <p>{movie.original_title}</p>
                        <p>Overview: <span>{movie.overview}</span></p>
                        <p>Release date: <span className="film-description_span">{movie.release_date}</span></p>
                        <p>Rating: <span className="film-description_span">{ movie.vote_average}</span></p>
                
                    console.log({movie}); */}
                </div>}
            
            <div>
                <NavLink className={getActiveClass} to="cast">Cast</NavLink>
                <NavLink className={getActiveClass} to="reviews">Reviews</NavLink>
            </div>
            <Outlet />
        </main>
       
    )
};