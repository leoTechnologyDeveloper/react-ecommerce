import { NavLink } from "react-router-dom";

const ErrorPage = ({ title }) => {
  return (
    <div className="flex flex-col h-screen justify-center w-full mx-auto bg-blue-400 text-center  text-5xl gap-10">
      <p>{title}</p>
      <h2 className="text-lime-300 text-4xl">
        <NavLink
          to={"/"}
          className="bg-black hover:bg-white hover:text-blue-700 rounded-full px-10 py-3  "
        >
          Ir a Home
        </NavLink>
      </h2>
    </div>
  );
};

export default ErrorPage;
