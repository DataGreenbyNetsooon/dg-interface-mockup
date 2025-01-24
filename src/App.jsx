import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Sensors from "./components/Sensors";
import SensorDetails from "./components/SensorDetails";
import Logs from "./components/Logs";
import Trends from "./components/Trends";
import Anomalies from "./components/Anomalies";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-gray-50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sensors" element={<Sensors />} />
              <Route path="/sensor/:type" element={<SensorDetails />} />
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
