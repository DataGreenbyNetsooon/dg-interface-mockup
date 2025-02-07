import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/monitoring/Navbar";
import Sidebar from "./components/monitoring/Sidebar";
import Footer from "./components/monitoring/Footer";
import Dashboard from "./components/monitoring/Dashboard";
import Sensors from "./components/monitoring/Sensors";
import SensorDetails from "./components/monitoring/SensorDetails";
import Logs from "./components/monitoring/Logs";
import Trends from "./components/monitoring/Trends";
import Anomalies from "./components/monitoring/Anomalies";
import HeatTemperatureManagement from "./components/monitoring/HeatTemperatureManagement";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-gray-50">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sensors" element={<Sensors />} />
              <Route path="/sensor/:type" element={<SensorDetails />} />
              <Route path="/heat-temperature-management" element={<HeatTemperatureManagement />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/anomalies" element={<Anomalies />} />
              <Route path="/logs" element={<Logs />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
