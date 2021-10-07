import React, { Suspense, useState } from "react";
import Agreement from "./Agreement";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./app.css";
import ErrorBoundary from "./ErrorBoundary";
import { GridLoader } from "react-spinners";
const Main = React.lazy(() => import("./Main"));
export function App1() {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />;
  }
  return (
    <ErrorBoundary>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
}

function createResource(pending) {
  let error, res;
  pending.then((r) => (res = r)).catch((e) => (error = e));

  return {
    read() {
      if (error) throw error;
      if (res) return res;
      throw pending;
    },
  };
}

const fiveSecondsToGo = new Promise((resolve) =>
  setTimeout(() => resolve({ go: "Hello World. This is rajesh" }), 3000),
);

const resource = createResource(fiveSecondsToGo);
function Gnar() {
  const result = resource.read();
  return <h1>Gnar: {result.go}</h1>;
}

export default function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Gnar />
      </ErrorBoundary>
    </Suspense>
  );
}
