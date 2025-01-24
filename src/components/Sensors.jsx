import { useEffect, useState } from "react";
import { sensorData } from "../data/mockSensors";
import { Link } from "react-router-dom";

const Sensors = () => {
  const [data, setData] = useState(sensorData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData([...sensorData]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const sensorTypes = [...new Set(data.map(sensor => sensor.type))];

  const getLatestValue = (type) => {
    const latestSensor = data.filter(sensor => sensor.type === type).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
    if (!latestSensor) return "N/A";
    
    let unit = "";
    switch (type) {
      case "Temperature":
        unit = "°C";
        break;
      case "Humidity":
        unit = "%";
        break;
      case "Power Consumption":
        unit = "W";
        break;
      case "CPU Usage":
        unit = "%";
        break;
      case "Network Traffic":
        unit = "Mbps";
        break;
      case "Disk":
        unit = "MB/s";
        break;
      default:
        unit = "";
    }
    return `${latestSensor.value} ${unit}`;
  };

  const getDescription = (type) => {
    const descriptions = {
      "Temperature": "Monitors the temperature levels.",
      "Humidity": "Tracks the humidity levels.",
      "Power Consumption": "Measures the power usage.",
      "CPU Usage": "Shows the CPU usage.",
      "Network Traffic": "Displays the network traffic.",
      "Disk": "Monitors the disk input/output.",
    };
    return descriptions[type] || "No description available.";
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-green-800">Real-time Telemetry</h2>
      <p className="mt-4 text-lg text-gray-700">
        Below is a list of all sensors and their latest readings.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sensorTypes.map((type) => (
          <Link
            key={type}
            to={`/sensor/${type}`}
            className="bg-white shadow-md rounded-lg p-6 block hover:bg-gray-100 transition duration-300"
          >
            <h4 className="text-xl font-bold">{type}</h4>
            <p className="text-gray-600 mt-2">{getDescription(type)}</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-green-700">{getLatestValue(type)}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/"
          className="btn btn-primary rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Sensors;