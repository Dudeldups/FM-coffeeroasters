import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: unknown = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center gap-8 p-8"
    >
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
