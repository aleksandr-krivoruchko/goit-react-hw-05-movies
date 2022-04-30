import { GoBack } from 'components/GoBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/moviesAPI';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI.movieCast(movieId).then(response => setCast(response.data.cast));
  }, [movieId]);

  return (
    <>
      <ul className="cast">
        {cast.map(({ id, original_name, character, profile_path }) => {
          return (
            profile_path && (
              <li key={id}>
                <img
                  src={`${BASE_URL_IMG}${profile_path}`}
                  alt={original_name}
                ></img>
                <h4>{original_name}</h4>
                <p>{`Character: ${character}`}</p>
              </li>
            )
          );
        })}
      </ul>
      {cast.length !== 0 && <GoBack href="movies" label="back" />}
    </>
  );
}
