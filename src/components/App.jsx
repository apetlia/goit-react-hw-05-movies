import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import SharedLayout from './SharedLayout';
// import MovieDetails from 'pages/MovieDetails';
// import Reviews from './Reviews';
// import Cast from './Cast';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const SharedLayout = lazy(() => import('./SharedLayout'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    </>
  );
};
