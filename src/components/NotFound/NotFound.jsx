import React from "react";

const NotFound = () => {
  return (
    <div className="not_found flex pt-60 flex-col items-center font-semibold">
      <h1 className="text-2xl pb-1">404 - Page not found.</h1>
      <p className="text-sm">
        Sorry, the page you are looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
