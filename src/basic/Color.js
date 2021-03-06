import React from "react";
import Checkbox from "./Checkbox";
import { useColors } from "./color-hooks";
import Phrase from "./Phrase";
import StarRating from "./StarRating";
import WordCount from "./WordCount";
export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>X</button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating
        selectedStar={rating}
        onRate={(rating) => rateColor(id, rating)}
      ></StarRating>
      <Phrase />
      <WordCount>{title}</WordCount>
      <Checkbox />
    </section>
  );
}
