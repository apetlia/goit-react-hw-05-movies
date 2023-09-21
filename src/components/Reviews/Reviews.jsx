import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/tmdp_api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [state, setState] = useState('pending');

  useEffect(() => {
    fetchData(`/movie/${movieId}/reviews`)
      .then(data => {
        setReviews(data.data.results);
        setState('resolved');
      })
      .catch(err => {
        console.log(err);
        setState('rejected');
      });
  }, [movieId]);

  if (state === 'pending') {
    return <div>Loading...</div>;
  }

  if (state === 'rejected') {
    return <div>Something Went Wrong, Please Try Again</div>;
  }

  if (state === 'resolved') {
    if (reviews.length === 0) {
      return <div>We don't have any reviews for this movie </div>;
    }

    return (
      <ul className="list-group">
        {reviews.map(review => {
          return (
            <li className="list-group-item" key={review.id}>
              <p>{review.content}</p>
              <p className="text-end fst-italic fw-medium fs-5 mb-0">
                {review.author}
              </p>
              <p className="text-end fst-italic fw-lighter">
                {new Date(review.created_at).toLocaleString()}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
};

Reviews.propTypes = {};

export default Reviews;
