import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDatabase, faBook, faTasks } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-5 text-white">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center text-green-400">AI Agents Dashboard</h1>
        
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-5 flex items-center">
            <FontAwesomeIcon icon={faChartLine} className="mr-3 text-green-400" />
            Overview
          </h2>
          <p className="text-gray-300">Welcome to the AI Agents Dashboard. Here you can find insights and performance metrics of our AI models and agents.</p>
        </section>
        
        {/* Key Metrics Section
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-5 flex items-center">
            <FontAwesomeIcon icon={faTasks} className="mr-3 text-green-400" />
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-4">Accuracy</h3>
              <p className="text-green-400 text-5xl">95%</p>
            </div>
            <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-4">Precision</h3>
              <p className="text-yellow-400 text-5xl">92%</p>
            </div>
            <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-4">Recall</h3>
              <p className="text-red-400 text-5xl">90%</p>
            </div>
          </div>
        </section> */}
        
        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-5 flex items-center">
            <FontAwesomeIcon icon={faTasks} className="mr-3 text-green-400" />
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/notebook/ship-detection" className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-4">Ship Detection</h3>
              <p className="text-gray-300">Using Faster R-CNN</p>
            </Link>
            <Link to="/notebook/music-recommendation" className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-4">Music Recommendation</h3>
              <p className="text-gray-300">Using Spotify Dataset</p>
            </Link>
            <Link to="/notebook/breast-cancer" className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-4">Breast Cancer Detection</h3>
              <p className="text-gray-300">Using Deep Learning</p>
            </Link>
          </div>
        </section>
        
        {/* Recent Activities Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-5 flex items-center">
            <FontAwesomeIcon icon={faTasks} className="mr-3 text-green-400" />
            Recent Activities
          </h2>
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-300">Recent activities and updates related to AI models...</p>
          </div>
        </section>
        
        {/* Documentation Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-5 flex items-center">
            <FontAwesomeIcon icon={faBook} className="mr-3 text-green-400" />
            Documentation & Resources
          </h2>
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-300">Links to documentation, tutorials, and other resources...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;