import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTachometerAlt, FaThermometerHalf, FaClipboardList, FaChartLine, FaExclamationTriangle, FaFire } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`h-full bg-gray-800 text-white p-6 shadow-md flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-56'}`}>
      <div className="flex mb-8">
        <button onClick={toggleSidebar} className="items-center justify-center justify-center hover:text-green-300 text-white text-2xl font-bold">
          <FaBars />
        </button>
        <h2 className={`text-2xl font-bold ml-4 transition-all duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Navigation</h2>
      </div>
      <ul className="space-y-8 flex-1">
        <li>
          <Link to="/dashboard" className="flex items-center hover:text-green-300 text-2xl">
            <FaTachometerAlt size={28} className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/heat-temperature-management" className="flex items-center hover:text-green-300 text-2xl">
            <FaFire size={28} className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Heat</span>
          </Link>
        </li>
        <li>
          <Link to="/sensors" className="flex items-center hover:text-green-300 text-2xl">
            <FaThermometerHalf size={28} className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Sensors</span>
          </Link>
        </li>
        <li>
          <Link to="/trends" className="flex items-center hover:text-green-300 text-2xl">
            <FaChartLine size={28} className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Trends</span>
          </Link>
        </li>
        <li>
          <Link to="/anomalies" className="flex items-center hover:text-green-300 text-2xl">
            <FaExclamationTriangle size={28} className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Anomalies</span>
          </Link>
        </li>
        <li>
          <Link to="/logs" className="flex items-center hover:text-green-300 text-2xl">
            <FaClipboardList size={28} className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Logs</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;