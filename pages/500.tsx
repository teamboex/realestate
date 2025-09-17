import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | Krishna Sanjay Real Estate</title>
        <meta name="description" content="An internal server error occurred." />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Server Error
          </h2>
          <p className="text-gray-600 mb-8">
            Something went wrong on our end. We're working to fix this issue.
          </p>

          <div className="space-y-4">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Go Back Home
            </Link>
            <div className="text-sm text-gray-500">
              <p>Need immediate assistance? Call us at:</p>
              <p className="font-semibold text-blue-600">8089896947</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
