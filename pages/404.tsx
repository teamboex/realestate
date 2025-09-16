import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Krishna Sanjay Real Estate</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="space-y-4">
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block">
              Go Back Home
            </Link>
            <div className="text-sm text-gray-500">
              <p>Need help? Contact us at:</p>
              <p className="font-semibold text-blue-600">6282106265</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
