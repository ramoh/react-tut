import React, { useState } from "react";

export function Gnar() {
  const [nickname, setNickname] = useState("dude");

  return <h1>{nickname}</h1>;
}

export function Image() {
  return <img src="/img.png" alt="rajesh" />;
}
