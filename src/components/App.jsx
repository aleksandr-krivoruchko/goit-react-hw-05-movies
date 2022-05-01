import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { NotFoundPage } from '../pages/NotFoundPage';
import { Layout } from './Layout';
import { Loading } from './Loading';
import { Navigation } from './Navigation';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  </>
);
