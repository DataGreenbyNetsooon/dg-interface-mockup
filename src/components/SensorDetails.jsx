import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sensorData } from "../data/mockSensors";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SensorDetails = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState("24h");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const filtered = sensorData.filter((sensor) => sensor.type === type);
      setData(filtered);
      setLoading(false);
    };

    fetchData();

    let interval;
    if (timeRange === "1h" || timeRange === "24h") {
      interval = setInterval(fetchData, 10000);
    }

    return () => clearInterval(interval);
  }, [type, timeRange]);

  const filterDataByTimeRange = (data, range) => {
    const now = new Date();
    const timeRanges = {
      "1h": 1 * 60 * 60 * 1000,
      "24h": 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      "2weeks": 14 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
    };

    return data.filter(
      (sensor) => new Date(sensor.timestamp) >= new Date(now - timeRanges[range])
    );
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const chartData = () => {
    const filteredData = filterDataByTimeRange(data, timeRange);
    return {
      labels: filteredData.map((sensor) => formatDate(sensor.timestamp)),
      datasets: [
        {
          label: `${type} Over Time`,
          data: filteredData.map((sensor) => parseFloat(sensor.value)),
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.4,
        },
      ],
    };
  };

  const descriptions = {
    Temperature: "Tracks temperature levels for optimal operations.",
    Humidity: "Displays humidity trends for environmental monitoring.",
    "Power Consumption": "Monitors energy usage over time.",
    "CPU Usage": "Analyzes processing load trends.",
    "Network Traffic": "Visualizes data flow across the network.",
    "Disk": "Shows disk performance for I/O operations.",
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-green-800">{type} Sensor Data</h2>
      <div className="flex justify-end space-x-2 mb-4">
        {["1h", "24h", "week", "2weeks", "month"].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-3 py-1 text-sm rounded-md transition-all ${
              timeRange === range
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {range === "1h"
              ? "Hourly"
              : range === "24h"
              ? "Daily"
              : `Last ${range}`}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="h-96">
          <Line data={chartData()} options={{ maintainAspectRatio: false }} />
        </div>
      )}

      <div className="mt-4">
        <p>{descriptions[type] || "Detailed insights for the sensor."}</p>
      </div>
    </div>
  );
};

export default SensorDetails;