import { NavLink, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import * as moviesAPI from '../services/moviesAPI';
import toast, { Toaster } from 'react-hot-toast';
import { Loading } from 'components/Loading';
import { Form } from 'components/Form';

export default function MoviesPage() {
  const [movies, setmovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';

  const handleFormSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error("You didn't enter anything");
      return;
    }

    moviesAPI
      .searhMovie(searchQuery)
      .then(response => {
        if (response.data.results.length === 0) {
          toast.error('Nothing was found for your request');
        }
        setmovies(response.data.results);
      })
      .catch(error => toast.error(error));

    setSearchParams({ query: '' });
  };

  function handleChange(e) {
    const { value } = e.currentTarget;

    setSearchParams({ query: value });
  }

  return (
    <>
      <Toaster />
      {!movies && <Loading />}
      <Form
        onSubmit={handleFormSubmit}
        onChange={handleChange}
        searchQuery={searchQuery}
      />
      <ol className="movies">
        {movies.map(({ id, original_title, release_date }) => (
          <li key={id}>
            <NavLink to={`${id}`}>
              {`${original_title} (${release_date.slice(0, 4)})`}
            </NavLink>
          </li>
        ))}
      </ol>
    </>
  );
}
