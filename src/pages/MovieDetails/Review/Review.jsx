import React, { useEffect, useState } from "react";
import { getReviewsOfMovie } from 'api/Api';
import { useParams } from 'react-router';
import RewievItem from './ReviewItem';

export default function Reviews() {
    const { id } = useParams();
    const [movieReviews, setMoviewReview] = useState([]);
    let errorMessage = false;
    useEffect(() => {
        const fetchReview = async (id) => {
            try {
                const data = await getReviewsOfMovie(id);
                setMoviewReview(data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchReview(id);
    }, [id])

    if (movieReviews.total_results === 0) {
    errorMessage = true;
  }

    console.log(movieReviews);
    return (
        <ul className="reviews-list">
            {movieReviews.results && <RewievItem data={movieReviews.results} />}
            {errorMessage && <p>Reviews not found</p> }
        </ul>
    )
}