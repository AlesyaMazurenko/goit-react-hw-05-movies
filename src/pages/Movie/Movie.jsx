import React, { useEffect, useState } from "react";
import { getSearchingOfMovie } from 'api/Api';
import MoviesItem from "components/MoviesItem/MoviesItem";
import { useSearchParams } from "react-router-dom";
import './Movie.css';

export default function Movie() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name") ?? "";

     const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
    };
  
    useEffect(() => {
        const fetchMovie = async () => {
            setSearch(productName)
            try {
                const data = await getSearchingOfMovie(productName);
                setMovies(data.results)
            } catch (error) {
                setError(error);
            }
        }
        if (productName) {
            fetchMovie();
        }
    }, [productName]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateQueryString(e.target.elements.search.value)
        
        try {
            const data = await getSearchingOfMovie(search);
            setMovies(data.results)
        } catch(error) {
            setError(error)
            
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <main className="wrapper">
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" name="search" value={search} />
                    <button className="search-btn" type="button">Search</button>
                </form>   
            </div>
            <ul className="movies-list">
                {movies && <MoviesItem data={movies} />}
                {movies.length === 0 && <p>Sorry, movie not found</p>}
                {error && <p>Unexpected error...</p>}
            </ul>
            
        </main>
    )
}