import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          name="query"
          type="text"
          className="form-control"
          placeholder="Input movie name"
          aria-label="Input movie name"
          aria-describedby="button-addon2"
          required
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
