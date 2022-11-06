import React from 'react'
import Review from './Review';
import StarRating from './StarRating';

let e = React.createElement

const ReviewForm = () => {
  return e('div',
  {class: 'card w-75'},
  e('div',
      {class: 'card-header bg-primary text-white'},
      'User and Date Placeholder'),
  e('div',
  {class: 'card-body'},
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu sem aliquet, blandit eros et, ultricies odio. Pellentesque iaculis tempor nunc. Quisque nec mi ac metus volutpat ultrices mollis in risus. Integer rutrum mollis dolor nec interdum. Vestibulum et viverra justo. In sit amet laoreet ante.'),
  e('div',
  {class: 'card-footer'},
    e('span', {}, null),
    e(StarRating, {}, null)
    )
  );
}

export default ReviewForm
