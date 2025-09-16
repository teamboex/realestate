const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Loading...
        </h2>
        <p className="text-gray-600">
          Please wait while we load the content for you.
        </p>
      </div>
    </div>
  );
};

export default Loading;
