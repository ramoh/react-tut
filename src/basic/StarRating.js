import React from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function StarRating({
  totalStars = 5,
  selectedStar = 0,
  onRate = (f) => f,
}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars} stars
      </p>
    </>
  );
}
