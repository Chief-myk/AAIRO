import React from 'react';

const PageNotFound = () => {
  return (
    <div className="bg-[#0a0e1a] text-white font-sans text-center p-24 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl mb-5">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <a href="/" className="text-[#4fc3f7] no-underline hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default PageNotFound;
