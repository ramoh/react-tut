import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import SiteLayout, { BreakThings, Callout, Menu } from "./SiteLayout";
export default function Main() {
  return (
    <SiteLayout menu={<Menu />}>
      <>
        <Callout>Welcome to the site</Callout>
        <ErrorBoundary>
          <h1>TODO: Home Page</h1>
          <p>Complete the main content of this home page</p>
          <BreakThings />
        </ErrorBoundary>
      </>
    </SiteLayout>
  );
}
