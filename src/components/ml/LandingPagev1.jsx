import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDatabase, faBook, faTasks } from '@fortawesome/free-solid-svg-icons';

const LandingPagev1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-5 text-center">AI Agents Dashboard</h1>
        
        {/* Overview Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3 flex items-center">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
            Overview
          </h2>
          <p className="text-gray-700">Welcome to the AI Agents Dashboard. Here you can find insights and performance metrics of our AI models and agents.</p>
        </section>
        
        {/* Key Metrics Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3 flex items-center">
            <FontAwesomeIcon icon={faTasks} className="mr-2" />
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Accuracy</h3>
              <p className="text-gray-700 text-4xl">95%</p>
            </div>
            <div className="bg-white p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Precision</h3>
              <p className="text-gray-700 text-4xl">92%</p>
            </div>
            <div className="bg-white p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Recall</h3>
              <p className="text-gray-700 text-4xl">90%</p>
            </div>
          </div>
        </section>
        
        {/* Data Sets Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3 flex items-center">
            <FontAwesomeIcon icon={faDatabase} className="mr-2" />
            Data Sets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Data Set 1</h3>
              <p className="text-gray-700">Summary of data set 1...</p>
            </div>
            <div className="bg-white p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Data Set 2</h3>
              <p className="text-gray-700">Summary of data set 2...</p>
            </div>
            <div className="bg-white p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Data Set 3</h3>
              <p className="text-gray-700">Summary of data set 3...</p>
            </div>
          </div>
        </section>
        
        {/* Recent Activities Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3 flex items-center">
            <FontAwesomeIcon icon={faTasks} className="mr-2" />
            Recent Activities
          </h2>
          <div className="bg-white p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-gray-700">Recent activities and updates related to AI models...</p>
          </div>
        </section>
        
        {/* Documentation Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3 flex items-center">
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Documentation & Resources
          </h2>
          <div className="bg-white p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <p className="text-gray-700">Links to documentation, tutorials, and other resources...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPagev1;