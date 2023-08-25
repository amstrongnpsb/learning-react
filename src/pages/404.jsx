import { useRouteError } from "react-router-dom";
export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className=" max-w-screen-lg mx-auto flex min-h-screen items-center flex-col justify-center gap-3">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p>Sorry , an unexpected error occured</p>
      <p>Page {error.statusText || error.message} </p>
    </div>
  );
};
