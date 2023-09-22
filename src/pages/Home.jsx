import React from 'react';
import { useEffect, useState } from 'react';

import { fetchData } from 'services/tmdp_api';
import { useLocation } from 'react-router-dom';
import FilmList from 'components/FilmList';

const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchData('/3/trending/movie/day')
      .then(data => {
        setFilms(data.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h3>Trending today</h3>
      <FilmList films={films} fromLocation={location} />
    </>
  );
};

export default Home;
