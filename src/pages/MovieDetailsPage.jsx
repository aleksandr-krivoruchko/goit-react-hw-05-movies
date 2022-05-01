import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as moviesAPI from '../services/moviesAPI';
import { GoBack } from 'components/GoBack';
import { Loading } from 'components/Loading';
import { MovieDescription } from 'components/MovieDescription';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.movieDetails(movieId).then(res => setMovie(res.data));
  }, [movieId]);

  return (
    <>
      {!movie && <Loading />}
      <GoBack href="/" label="back" />
      {movie && <MovieDescription movie={movie} movieId={movieId} />}
      <Outlet />
    </>
  );
}
