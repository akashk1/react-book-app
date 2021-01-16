import React from "react";
import StarRatings from "react-rating-stars-component";
const Rating = (props) => {
  const firstExample = {
    size: 30,
    value: props.rating,
    edit: false,
  };
  return <StarRatings {...firstExample} />;
};

export default Rating;
