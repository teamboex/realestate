import { NextPageContext } from "next";
import Head from "next/head";

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <>
      <Head>
        <title>Error {statusCode} - Krishna Sanjay Real Estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">
            {statusCode || "Error"}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {statusCode === 404 ? "Page Not Found" : "Something went wrong"}
          </h2>
          <p className="text-gray-600 mb-8">
            {statusCode === 404
              ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
              : "We are sorry, but something unexpected happened. Please try again later."}
          </p>
          <div className="space-y-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Go Back Home
            </button>
            <div className="text-sm text-gray-500">
              <p>Need help? Contact us at:</p>
              <p className="font-semibold text-blue-600">8089896947</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
