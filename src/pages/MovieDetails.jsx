import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchData } from 'services/tmdp_api';
import FilmCard from 'components/FilmCard';

const MovieDetails = () => {
  const location = useLocation();
  const linkToBack = location.state?.from ?? '/';
  const [filmData, setFilmData] = useState(null);
  const [state, setState] = useState('pending');
  const { movieId } = useParams();

  useEffect(() => {
    fetchData(`/3/movie/${movieId}`)
      .then(data => {
        setFilmData(data.data);
        setState('resolved');
      })
      .catch(err => setState('rejected'));
  }, [movieId]);

  return (
    <>
      <div className="row">
        <div className="col">
          <Link className="link-dark link-opacity-50-hover" to={linkToBack}>
            <IoIosArrowBack size={'30px'} />
          </Link>
        </div>
      </div>

      {state === 'pending' && <div>Loading...</div>}
      {state === 'rejected' && (
        <div>Something Went Wrong, Please Try Again</div>
      )}
      {state === 'resolved' && <FilmCard filmData={filmData} />}
    </>
  );
};

export default MovieDetails;
