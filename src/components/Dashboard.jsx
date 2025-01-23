import React from "react";
import News from "../data/mockNews";
import { mockSensors } from "../data/mockDashSensors";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <h2 className="text-4xl font-bold text-green-800">Dashboard</h2>
      <p className="mt-4 text-lg text-gray-700">
        Welcome to the DataGreen interface. Navigate through the sections to explore data insights and monitor performance.
      </p>

      {/* Analytics Widgets */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h4 className="text-2xl font-bold text-green-700">{mockSensors.length}</h4>
          <p className="text-gray-600">Active Sensors</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h4 className="text-2xl font-bold text-green-700">546</h4>
          <p className="text-gray-600">Logs Processed Today</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h4 className="text-2xl font-bold text-green-700">23</h4>
          <p className="text-gray-600">Anomalies Detected</p>
        </div>
      </div>

      {/* Telemetry Trends Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-green-700">Telemetry Trends</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSensors.map((sensor) => {
            const trendIcon = sensor.trend === "up" ? "🔺" : "🔻";
            const trendColor = sensor.trend === "up" ? "text-red-500" : "text-green-500";
            const progressBarColor =
              sensor.usage > 80
                ? "bg-red-500"
                : sensor.usage > 50
                ? "bg-yellow-500"
                : "bg-green-500";

            return (
              <div key={sensor.id} className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-bold">{sensor.type}</h4>
                <p className="text-gray-600 mt-2">{sensor.details}</p>
                <div className="mt-4 flex items-center">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      sensor.status === "Good"
                        ? "bg-green-100 text-green-700"
                        : sensor.status === "Warning"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {sensor.status}
                  </span>
                  <span className={`ml-2 text-lg ${trendColor}`}>{trendIcon}</span>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-full ${progressBarColor}`}
                      style={{ width: `${sensor.usage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1">{sensor.usage}% of threshold</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-green-700">Quick Actions</h3>
        <div className="mt-4 space-x-4">
          <Link
            to="/sensors"
            className="btn btn-primary rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            View Sensors
          </Link>
          <Link
            to="/logs"
            className="btn btn-secondary rounded-lg px-4 py-2 bg-gray-500 text-white hover:bg-gray-600 transition duration-300"
          >
            View Logs
          </Link>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-green-700">Latest News</h3>
        <div className="mt-4">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;