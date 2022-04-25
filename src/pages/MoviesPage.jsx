import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/moviesAPI';

export default function MoviesPage() {
  const [movies, setmovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      console.log('qqqqqqqqqq');
      return;
    }
    moviesAPI
      .searhMovie(searchQuery)
      .then(response => setmovies(response.data.results));
  };

  function handleChange(e) {
    const { value } = e.currentTarget;

    setSearchQuery(value.toLowerCase());
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter movie title
          <input
            value={searchQuery}
            onChange={handleChange}
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="find movie"
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies &&
          movies.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`${id}`}>{original_title}</NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
