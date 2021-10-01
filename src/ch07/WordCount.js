import { useEffect, useMemo } from "react";
import { useAnyKeyToRender } from "./use-any-key";

export default function WordCount({ children = "" }) {
  useAnyKeyToRender();
  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}
