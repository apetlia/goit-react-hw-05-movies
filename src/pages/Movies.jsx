import FilmList from 'components/FilmList';
import SearchForm from 'components/SearchForm';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchData } from 'services/tmdp_api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [searchedFilms, setSearchedFilms] = useState(null);
  const [state, setState] = useState('idle');

  const searchQuery = searchParams.get('query') ?? '';

  const onSubmit = evn => {
    evn.preventDefault();
    setState('idle');

    const query = evn.target.query.value.trim();
    query ? setSearchParams({ query }) : setSearchParams({});
    evn.target.query.value = '';
  };

  useEffect(() => {
    if (searchQuery === '') return;

    setState('pending');
    fetchData(`/3/search/movie?query=${searchQuery.trim()}`)
      .then(data => {
        setSearchedFilms(data.data.results);
        setState('resolved');
      })
      .catch(err => setState('rejected'));
  }, [searchQuery]);

  return (
    <>
      <div className="row">
        <div className="col-6">
          <SearchForm onSubmit={onSubmit} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {state === 'pending' && <div>Loading...</div>}
          {state === 'rejected' && (
            <div>Something Went Wrong, Please Try Again</div>
          )}
          {state === 'resolved' &&
            (searchedFilms.length === 0 ? (
              <div>
                No films with this name: <em>{searchQuery}</em>
              </div>
            ) : (
              <FilmList films={searchedFilms} fromLocation={location} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
