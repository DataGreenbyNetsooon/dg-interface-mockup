import React from 'react';
import logo from '/DataGreen_Icon_Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="DataGreen Logo" className="h-12 w-10" />
          <h1 className="text-3xl font-bold">DataGreen</h1>
        </div>
        <div className="space-x-8 text-2xl font-semibold">
          <a href="/dashboard" className="hover:text-green-300">Telemetry & Monitoring</a>
          <a href="/ai-empowered-solutions" className='hover:text-green-300'>AI Agents</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;