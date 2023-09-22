import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FilmList = ({ films, fromLocation }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link
            to={`/movies/${film.id}`}
            state={{ from: fromLocation }}
            className="link-dark link-opacity-50-hover link-underline-light"
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  fromLocation: PropTypes.object.isRequired,
};

export default FilmList;
