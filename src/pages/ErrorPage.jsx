import React from "react";
import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-green-600">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Oops! Page not found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        {error?.statusText || error?.message || 
          "The page you are looking for doesn't exist."}
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
