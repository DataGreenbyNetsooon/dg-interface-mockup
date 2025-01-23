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
    return latestSensor ? latestSensor.value : "N/A";
  };

  const getDescription = (type) => {
    const descriptions = {
      "Temperature": "Monitors the temperature levels.",
      "Humidity": "Tracks the humidity levels.",
      "Power Consumption": "Measures the power usage.",
      "CPU Usage": "Shows the CPU usage.",
      "Network Traffic": "Displays the network traffic.",
      "Disk I/O": "Indicates the disk input/output."
    };
    return descriptions[type] || "No description available.";
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-green-800">Sensor Menu</h2>
      <p className="mt-2 text-lg text-gray-700">
        Explore the various sensors monitoring different aspects of the system. Click on a sensor type to view detailed data and trends.
      </p>
      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sensorTypes.map((type) => (
          <li key={type} className="p-4 bg-white shadow-md border border-green-300 rounded-lg">
            <Link to={`/sensor/${type}`} className="block text-xl font-bold">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-green-700">{type}</h3>
                  <p className="text-sm text-gray-600">{getDescription(type)}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-green-800">{getLatestValue(type)}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sensors;