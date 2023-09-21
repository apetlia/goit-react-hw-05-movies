import React from 'react';
import { useEffect, useState } from 'react';

import { fetchData } from 'services/tmdp_api';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchData('/trending/movie/day')
      .then(data => {
        setFilms(data.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link
              to={`/movies/${film.id}`}
              state={{ from: location }}
              className="link-dark link-opacity-50-hover link-underline-light"
            >
              {film.title || film.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
