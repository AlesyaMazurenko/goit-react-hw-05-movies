import React from "react";
import { Link } from 'react-router-dom';
import { nanoid } from "nanoid";
import './MoviesItem.css';

export default function MoviesItem({ data }) {
    return data.map(({ title, id }) => {
        return <li className="movie-item" key={nanoid()}>
            <Link to={`/movies/${id}`}>{title}</Link>
        </li>
    })
}