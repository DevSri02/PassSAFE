import React from "react";
import {ErrorBoundary} from "react-error-boundary";
import "./App.css";
import Navbars from "./components/Navbar";
import Managers from "./components/Manager";
import Footers from "./components/Footer";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h2>Something went wrong: {error.message}</h2>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      
      <Navbars />
      <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Managers />
      </div>
      <Footers />
    </ErrorBoundary>
  );
}
