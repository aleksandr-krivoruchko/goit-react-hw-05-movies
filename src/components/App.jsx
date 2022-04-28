import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';
import { NotFoundPage } from '../pages/NotFoundPage';

import { Layout } from './Layout';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => (
  <Routes>
    {/* <Suspense fallback={<h1>Loading...</h1>}> */}
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
    {/* </Suspense> */}
  </Routes>
);
