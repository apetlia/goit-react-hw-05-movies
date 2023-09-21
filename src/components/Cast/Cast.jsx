import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/tmdp_api';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [state, setState] = useState('pending');

  useEffect(() => {
    fetchData(`/movie/${movieId}/credits`)
      .then(data => {
        setActors(data.data.cast);
        setState('resolved');
      })
      .catch(err => {
        setState('rejected');
        console.log(err);
      });
  }, [movieId]);

  if (state === 'pending') {
    return <div>Loading...</div>;
  }

  if (state === 'rejected') {
    return <div>Something Went Wrong, Please Try Again</div>;
  }

  if (state === 'resolved') {
    return (
      <>
        <ul className="d-flex flex-wrap gap-3 list-unstyled justify-content-between">
          {actors.map(actor => (
            <li key={actor.id}>
              <div className="d-flex flex-column align-items-center">
                <div className="avatar-thumb ">
                  <img
                    src={`http://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    className="img-fluid"
                    alt={`${actor.name}`}
                  />
                </div>
                <p className="mb-0 fw-bold">{actor.name}</p>
                <p>{actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default Cast;
