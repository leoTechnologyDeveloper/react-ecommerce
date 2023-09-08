import React from "react";

const ErrorPage = ({ title }) => {
  return (
    <div className="flex flex-col h-screen justify-center w-full mx-auto bg-blue-400 text-center  text-5xl gap-10">
      <h2 className="text-white">404</h2>
      <p>{title}</p>
    </div>
  );
};

export default ErrorPage;
