import React from "react";
import "./app.css";
import ErrorBoundary from "./ErrorBoundary";
import SiteLayout, { BreakThings, Callout, Menu } from "./SiteLayout";
export default function App() {
  return (
    <SiteLayout menu={<Menu />}>
      <>
        <Callout>Callout</Callout>
        <ErrorBoundary>
          <h1>Contents</h1>
          <p>This is the main part of the example layout</p>
          <BreakThings />
        </ErrorBoundary>
      </>
    </SiteLayout>
  );
}
