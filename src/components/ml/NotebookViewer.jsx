import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

const NotebookViewer = ({ notebookPath }) => {
  const [loading, setLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleRefresh = () => {
    setLoading(true);
    setIframeKey(prev => prev + 1);
  };

  // Derive a readable title from the file name
  const title = notebookPath
    .split('/').pop()
    .replace('.html', '')
    .replace(/-/g, ' ');

  return (
    <div className="bg-gray-900 min-h-screen p-5 text-white">
      <div className="container mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 font-semibold">
          <Link to="/ai-empowered-solutions" className="text-green-500 hover:underline">
            Home
          </Link>
          {' / '}
          <span>{title}</span>
        </nav>

        {/* Notebook Title/Header */}
          <h1 className="text-4xl font-bold mb-4 capitalize">{title}</h1>

          {/* Refresh Button */}
          <div className="mb-4 space-x-4">
            <Link 
              to="/ai-empowered-solutions" 
              className="inline-block px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
              Back to Landing Page
            </Link>
            <button 
              onClick={handleRefresh} 
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
              Refresh Notebook
            </button>
          </div>

          {/* Loading Spinner & Error Message */}
        {loading && (
          <div className="mb-4 flex items-center">
            <p className="mr-2">Loading notebook...</p>
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        )}

        {error && (
          <div className="mb-4 text-red-500">
            Error loading notebook. Please try refreshing.
          </div>
        )}

        {/* Notebook Iframe */}
        <Iframe 
          key={iframeKey}
          url={notebookPath}
          width="100%"
          height="750px"
          id="notebookIframe"
          className="myClassname"
          display="initial"
          position="relative"
          onLoad={handleLoad}
        />
      
      </div>
    </div>
  );
};

export default NotebookViewer;