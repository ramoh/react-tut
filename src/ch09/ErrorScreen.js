import React from "react";

export function ErrorScreen({ error }) {
  //
  // Here you can handle or track the error before rendering the message
  //
  return (
    <div className="error">
      <h3>We are sorry... something went wrong</h3>
      <p>We can not process your request at this moment</p>
      <p>Error: {error.message}</p>
    </div>
  );
}
