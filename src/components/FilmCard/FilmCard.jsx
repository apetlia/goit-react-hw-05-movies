import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

const FilmCard = ({ filmData }) => {
  const {
    title,
    poster_path,
    overview,
    release_date,
    genres,
    vote_average,
    tagline,
  } = filmData;

  return (
    <>
      <div className="row border-bottom py-3">
        <div className="col-4">
          <img
            src={`http://image.tmdb.org/t/p/w300${poster_path}`}
            className="img-thumbnail img-fluid"
            alt={`${title}`}
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-between">
          <div className="flex-grow-1">
            <h3 className="fw-bold mb-0">
              {title} ({release_date.slice(0, 4)})
            </h3>
            <p>{tagline}</p>
          </div>
          <div className="flex-grow-1">
            <p className="fw-bold fs-6 mb-0">Overview</p>
            <p>{overview}</p>
          </div>

          <div>
            <p className="fw-bold fs-6 mb-0">Genres</p>
            <p>{genres.map(item => item.name).join(' ')}</p>
          </div>

          <div>
            <p className="fw-bold fs-6 mb-0">Rating</p>
            <p className="mb-0">{vote_average}</p>
          </div>
        </div>
      </div>
      <div className="row border-bottom py-3">
        <div className="col">
          <ul className="my-0 ">
            <li>
              <Link
                className="link-dark link-opacity-50-hover link-underline-light"
                to="cast"
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                className="link-dark link-opacity-50-hover link-underline-light"
                to="reviews"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row py-3">
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

FilmCard.propTypes = {
  filmData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    vote_average: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmCard;
