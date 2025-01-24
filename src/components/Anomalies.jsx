import React, { useState } from "react";
import { mockDashSensors } from "../data/mockDashSensors";

const Anomalies = () => {
  const anomalies = mockDashSensors.filter(sensor => sensor.status === "Warning" || sensor.status === "Critical");
  const [expandedAnomalyId, setExpandedAnomalyId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date");

  const toggleExpand = (id) => {
    setExpandedAnomalyId(expandedAnomalyId === id ? null : id);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredAnomalies = anomalies.filter(sensor =>
    sensor.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sensor.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAnomalies = filteredAnomalies.sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.timestamp) - new Date(a.timestamp);
    } else if (sortOption === "severity") {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      ["Type,Status,Details,Usage,Timestamp"].join(",") + "\n" +
      sortedAnomalies.map(sensor => 
        [sensor.type, sensor.status, sensor.details, sensor.usage, sensor.timestamp].join(",")
      ).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "anomalies.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="p-6">
      {/* Anomalies Header */}
      <h2 className="text-4xl font-bold text-red-800">Anomalies</h2>
      <p className="mt-4 text-lg text-gray-700">
        Below is a list of sensors that are currently in a warning or critical state.
      </p>

      {/* Search and Filter */}
      <div className="mt-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search anomalies..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-lg"
        />
        <select value={sortOption} onChange={handleSort} className="p-2 border border-gray-300 rounded-lg">
          <option value="date">Sort by Date</option>
          <option value="severity">Sort by Severity</option>
        </select>
        <button onClick={exportData} className="p-2 bg-blue-500 text-white rounded-lg">Export Data</button>
      </div>

      {/* Anomalies List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAnomalies.map((sensor) => {
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
              <button
                onClick={() => toggleExpand(sensor.id)}
                className="text-green-600 underline mt-2"
              >
                {expandedAnomalyId === sensor.id ? "Hide Details" : "Show Details"}
              </button>
              {expandedAnomalyId === sensor.id && (
                <p className="mt-2 text-green-700">{sensor.details}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Anomalies;