import { NavLink, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as moviesAPI from '../services/moviesAPI';
import { GoBack } from 'components/GoBack';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.movieDetails(movieId).then(response => setMovie(response.data));
  }, [movieId]);

  return (
    movie && (
      <>
        <GoBack href="/" label="back" />
        <div>
          <div className="description">
            <img
              src={`${BASE_URL_IMG}${movie.poster_path}`}
              alt={movie.title}
              className="img"
            />
            <div>
              <h1>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h1>
              <p>{`User Score: ${movie.vote_average * 10}%`}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(g => `${g.name} `)}</p>
            </div>
          </div>

          <hr />
          <div>
            <h3>Additional information</h3>
            <ul>
              <li className="movie-link">
                <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
              </li>
              <li className="movie-link">
                <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
          <hr />
          <Outlet />
        </div>
      </>
    )
  );
}
