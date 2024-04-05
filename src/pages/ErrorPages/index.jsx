import { useRouteError } from "react-router-dom";

const ErrorPages = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen grid place-content-center place-items-center text-black">
      <div>
        <p>{error.error.message}</p>
        <p>Testing</p>
      </div>
    </div>
  );
};

export default ErrorPages;
