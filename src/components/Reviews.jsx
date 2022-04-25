import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/moviesAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI
      .movieReviews(movieId)
      .then(response => setReviews(response.data.results));
  }, [movieId]);
  console.log(reviews);

  return reviews.length !== 0 ? (
    reviews.map(({ author, content }) => (
      <div>
        <h4>{author}</h4>
        <p>{content}</p>
      </div>
    ))
  ) : (
    <p>Sorry. We don't have any reviews for this movie</p>
  );
}
