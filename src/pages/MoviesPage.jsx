import { NavLink, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import * as moviesAPI from '../services/moviesAPI';

export default function MoviesPage() {
  const [movies, setmovies] = useState([]);
  //   const [searchQuery, setSearchQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';

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

  //   function handleChange(e) {
  //     const { value } = e.currentTarget;

  //     setSearchQuery(value.toLowerCase());
  //   }
  function handleChange(e) {
    const { value } = e.currentTarget;

    setSearchParams({ query: value });
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className="input"
          value={searchQuery}
          onChange={handleChange}
          type="search"
          name="search"
          autocomplete="off"
          autofocus
          placeholder="find favourite movie"
        ></input>
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>
      <ul>
        {movies &&
          movies.map(({ id, original_title, release_date }) => (
            <li key={id}>
              <NavLink to={`${id}`}>
                {`${original_title} (${release_date.slice(0, 4)})`}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
