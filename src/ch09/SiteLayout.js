import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export const Menu = () => (
  <ErrorBoundary>
    <div
      style={{
        height: "100%",
      }}
    >
      <p>TODO:Build a menu </p>
    </div>
  </ErrorBoundary>
);

export const BreakThings = () => {
  throw new Error("We intentionally broke something");
};

export const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);

export default function SiteLayout({ children, menu = (c) => null }) {
  return (
    <div
      className="site-container"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
      }}
    >
      <div
        style={{
          minWidth: "15%",
          textAlign: "center",
          backgroundColor: "aliceblue",
        }}
      >
        {menu}
      </div>
      <div
        style={{
          minWidth: "85%",
          textAlign: "center",
          backgroundColor: "bisque",
        }}
      >
        {children}
      </div>
    </div>
  );
}
