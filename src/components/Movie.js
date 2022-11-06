import React from 'react'
import StarRating from './StarRating'
import Review from './Review'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import MovieData from './MovieData'

let e = React.createElement;

const Movie = () => {
  return e('div',
  {class: 'card w-75'},
  e('div',
      {class: 'card-header bg-primary text-white'},
      'User and Date Placeholder'),
  e('div',
  {class: 'card-body'},
  '<MovieData />'),
  e('div',
  {class: 'card-footer'},
    e(Review, {}, null),
    e('span', {}, null),
    e(StarRating, {}, null),
    e('br', {}, null),
    e(ReviewForm, {}, null),
    )
  );
}

export default Movie
