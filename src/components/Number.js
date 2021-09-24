//demonstrate the reducer
import React, { useReducer } from "react";

export default function Number() {
  const [number, setNumber] = useReducer(
    (number, nextNumber) => number + nextNumber,
    0,
  );
  return <h1 onClick={() => setNumber(30)}>{number}</h1>;
}
