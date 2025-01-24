import React from 'react';
import { mockDashSensors } from '../data/mockDashSensors';
import { FaClock, FaCalendarDay, FaBolt, FaCheckCircle, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';

const Trends = () => {
  const peakConsumption = mockDashSensors.reduce((max, sensor) => sensor.usage > max ? sensor.usage : max, 0);

  const peakUsageTime = "14:00"; // Placeholder value, replace with actual calculation
  const peakUsageDay = "Wednesday"; // Placeholder value, replace with actual calculation
  const optimalUptime = 99.5; // Placeholder value, replace with actual calculation

  const weeklyProjection = {
    temperature: "22°C",
    humidity: "45%",
    powerConsumption: "1200W",
    cpuUsage: "65%",
  };

  const aiInsights = [
    "Potential CPU overload on Friday.",
    "High network traffic expected on Monday.",
    "Disk I/O performance may degrade over the weekend.",
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-green-800">Trends</h1>
      <p className="mt-4 text-lg text-gray-700">
        AI-powered solutions to catch trends and add a preventive aspect to it.
      </p>

      <h2 className='mt-8 text-3xl font-bold text-green-800'>This week's sum-up</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaBolt className="text-4xl text-yellow-500 mx-auto" />
          <h2 className="text-2xl font-bold text-green-700 mt-4">Peak Consumption</h2>
          <p className="text-gray-600 mt-2">The peak consumption recorded is <strong>{peakConsumption}%</strong>.</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div
              className="bg-red-500 h-4 rounded-full"
              style={{ width: `${peakConsumption}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaClock className="text-4xl text-blue-500 mx-auto" />
          <h2 className="text-2xl font-bold text-green-700 mt-4">Peak Usage Time</h2>
          <p className="text-gray-600 mt-2">The peak usage time is <strong>{peakUsageTime}</strong>.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaCalendarDay className="text-4xl text-red-500 mx-auto" />
          <h2 className="text-2xl font-bold text-green-700 mt-4">Peak Usage Day</h2>
          <p className="text-gray-600 mt-2">The peak usage day is <strong>{peakUsageDay}</strong>.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaCheckCircle className="text-4xl text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold text-green-700 mt-4">Optimal Uptime</h2>
          <p className="text-gray-600 mt-2">The optimal uptime is <strong>{optimalUptime}%</strong>.</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${optimalUptime}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-green-800">Weekly Projection</h2>
        <p className="mt-4 text-lg text-gray-700">
          Projected values for key metrics based on historical data.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaChartLine className="text-4xl text-purple-500 mx-auto" />
            <h2 className="text-2xl font-bold text-green-700 mt-4">Temperature</h2>
            <p className="text-gray-600 mt-2">Projected: <strong>{weeklyProjection.temperature}</strong></p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaChartLine className="text-4xl text-purple-500 mx-auto" />
            <h2 className="text-2xl font-bold text-green-700 mt-4">Humidity</h2>
            <p className="text-gray-600 mt-2">Projected: <strong>{weeklyProjection.humidity}</strong></p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaChartLine className="text-4xl text-purple-500 mx-auto" />
            <h2 className="text-2xl font-bold text-green-700 mt-4">Power Consumption</h2>
            <p className="text-gray-600 mt-2">Projected: <strong>{weeklyProjection.powerConsumption}</strong></p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaChartLine className="text-4xl text-purple-500 mx-auto" />
            <h2 className="text-2xl font-bold text-green-700 mt-4">CPU Usage</h2>
            <p className="text-gray-600 mt-2">Projected: <strong>{weeklyProjection.cpuUsage}</strong></p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-green-800">Predictive AI Insights</h2>
        <p className="mt-4 text-lg text-gray-700">
          Insights and predictions based on AI analysis.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-6">
          {aiInsights.map((insight, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center">
              <FaExclamationTriangle className="text-4xl text-yellow-500 mr-4" />
              <p className="text-gray-600">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;