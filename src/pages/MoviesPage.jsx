import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/moviesAPI';

export default function MoviesPage() {
  //   const [movies, setmovies] = useState(null);

  //   useEffect(() => {
  //     moviesAPI.searhMovie().then(response => setmovies(response.data.results));
  //   }, []);

  return <h1>This is movies</h1>;
}
