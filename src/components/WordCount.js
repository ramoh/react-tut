import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { useAnyKeyToRender } from "./use-key";

export default function WordCount({ children = "" }) {
  useAnyKeyToRender();
  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);
  useLayoutEffect(() => console.log("useLayoutEffect"));
  return (
    <>
      <p>{children}</p>
      <p>{words.length} - words</p>
    </>
  );
}
