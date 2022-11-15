import React, { useEffect, useState } from "react";
import { getCastOfMovie } from 'api/Api';
import { useParams } from "react-router";
import CastItem from './CastItem/CastItem';

export function Cast() {
    const [movieCast, setMovieCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchCastOfMovie = async (id) => {
            try {
                const data = await getCastOfMovie(id);
                setMovieCast(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchCastOfMovie(id)
    }, [id])


return (
    <ul className="cast-list">
        {movieCast.length !== 0 && <CastItem data={movieCast.cast} />}
    </ul>
)
}