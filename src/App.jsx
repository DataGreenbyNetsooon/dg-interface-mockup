import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Monitoring components
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

// ml components
import LandingPage from "./components/ml/LandingPage";
import NotebookViewer from "./components/ml/NotebookViewer";

// -----------------------------------------------

  const MainLayout = () => {
    const location = useLocation();
    const hideSidebar = location.pathname === '/ai-empowered-solutions' || location.pathname.includes('/notebook');
  
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          {!hideSidebar && <Sidebar />}
          <main className="flex-1 bg-gray-50">
            <Routes>
              {/* Telemetry & Monitoring */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sensors" element={<Sensors />} />
              <Route path="/sensor/:type" element={<SensorDetails />} />
              <Route path="/heat-temperature-management" element={<HeatTemperatureManagement />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/anomalies" element={<Anomalies />} />
              <Route path="/logs" element={<Logs />} />
              {/* AI Agents section */}
              <Route path="/ai-empowered-solutions" element={<LandingPage />} />
              {/* Notebook Viewer */}
              <Route path="/notebook/breast-cancer" element={<NotebookViewer notebookPath="/notebooks/breast-cancer.html" />} />
              <Route path="/notebook/ship-detection" element={<NotebookViewer notebookPath="/notebooks/ship-detection-using-faster-r-cnn-part-2.html" />} />
              <Route path="/notebook/music-recommendation" element={<NotebookViewer notebookPath="/notebooks/music-recommendation-system-using-spotify-dataset.html" />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    );
  };
  
  const App = () => {
    return (
      <Router>
        <MainLayout />
      </Router>
    );
  };
  
  export default App;