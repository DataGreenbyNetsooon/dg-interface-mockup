// Mock data for the Dashboard sensors, used for the Anomalies and Trends components.

export const mockDashSensors = [
  {
    id: 1,
    type: "Temperature",
    details: "Temperature is stable within optimal range.",
    status: "Good",
    trend: "up",
    usage: 45,
  },
  {
    id: 2,
    type: "CPU Usage",
    details: "CPU usage is high, consider load balancing.",
    status: "Warning",
    trend: "up",
    usage: 85,
  },
  {
    id: 3,
    type: "Disk",
    details: "Disk I/O is performing optimally.",
    status: "Good",
    trend: "down",
    usage: 30,
  },
  {
    id: 4,
    type: "Memory Usage",
    details: "Memory usage approaching limits.",
    status: "Warning",
    trend: "up",
    usage: 75,
  },
  {
    id: 5,
    type: "Network Traffic",
    details: "Network traffic is within normal parameters.",
    status: "Good",
    trend: "stable",
    usage: 50,
  },
  {
    id: 6,
    type: "Humidity",
    details: "Humidity levels are within the optimal range.",
    status: "Good",
    trend: "stable",
    usage: 40,
  },
];