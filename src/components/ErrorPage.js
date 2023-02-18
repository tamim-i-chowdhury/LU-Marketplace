import React, { useState } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const error = useRouteError();

  console.error(error);
  return (
    <>
      <div className="flex flex-col min-h-[500px] justify-center items-center">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <>
            <p className="text-xl">{error.status}</p>
            <p className="text-red-500 text-2xl">
              {error.statusText || error.message}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
