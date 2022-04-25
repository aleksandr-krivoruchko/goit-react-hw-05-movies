import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/moviesAPI';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    moviesAPI
      .getTrending()
      .then(response => setTrendMovies(response.data.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendMovies &&
        trendMovies.map(({ id, title }) => {
          return (
            <ul>
              <li key={id}>
                <Link to={`movies/${id}`}>{title}</Link>
              </li>
            </ul>
          );
        })}
    </>
  );
}
