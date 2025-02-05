import React, { useEffect, useState } from "react";
import { mockHeatData } from "../data/mockHeatData";
import { FaThermometerHalf, FaBolt, FaSnowflake, FaDollarSign, FaExclamationTriangle, FaLeaf } from "react-icons/fa";
import { Line } from "react-chartjs-2";

const HeatTemperatureManagement = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data
        const fetchData = () => {
            setLoading(true);
            setData([...mockHeatData]);
            setLoading(false);
        };

        fetchData(); // Init

        // Set interval to fetch data every 3 seconds
        const interval = setInterval(fetchData, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Get the latest data entry
    const latestData = data[data.length - 1] || {};

    // Calculate earnings from heat used for power
    const calculateEarnings = (heatUsedForPower) => {
        const ratePerKWh = 0.15; // Rate per kWh from https://euenergy.live/electricity-prices/france/nice
        return (heatUsedForPower * ratePerKWh).toFixed(2);
    };

    // Calculate CO2 emissions saved
    const calculateCO2EmissionsSaved = (heatUsedForPower) => {
        const co2PerKWh = 0.5; // kg of CO2 saved per kWh -- Average in Nice is at 0.6
        return (heatUsedForPower * co2PerKWh).toFixed(2);
    };

    // Prepare data for the historical chart
    const historicalData = {
        labels: data.map(entry => entry.date),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: data.map(entry => entry.temperature),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
            {
                label: 'Heat Used for Power (kWh)',
                data: data.map(entry => entry.heatUsedForPower),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
            {
                label: 'Heat Transformed to A/C (kWh)',
                data: data.map(entry => entry.heatTransformedToAC),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="p-6">
            <h2 className="text-4xl font-bold text-green-800">Heat and Temperature Management</h2>
            <p className="mt-4 text-lg text-gray-700">
                Below are the reports on the current temperature in the data center, latest reports, and heat usage.
            </p>

            {loading ? (
                <p>Loading data...</p>
            ) : (
                <>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Current Temperature Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <div className="flex justify-center items-center mb-4">
                                <FaThermometerHalf className="text-4xl text-red-500" />
                                <h4 className="text-2xl font-bold text-green-700 ml-2">Current Temperature</h4>
                            </div>
                            <p className="text-4xl font-bold text-gray-800">{latestData.temperature}°C</p>
                            <p className="text-gray-600 mt-2">
                                {latestData.temperature < 60 
                                    ? "Under 60°C, we aren't able to recycle the excess heat."
                                    : "Optimal temperature for heat recycling."}
                            </p>
                        </div>
                        {/* Heat Used for Power Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <div className="flex justify-center items-center mb-4">
                                <FaBolt className="text-4xl text-yellow-500" />
                                <h4 className="text-2xl font-bold text-green-700 ml-2">Heat Used for Power</h4>
                            </div>
                            <p className="text-4xl font-bold text-gray-800">{latestData.heatUsedForPower} kWh</p>
                            <p className="text-gray-600 mt-2">
                                Heat used to power and heat the building.
                            </p>
                        </div>
                        {/* Heat Transformed to A/C Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <div className="flex justify-center items-center mb-4">
                                <FaSnowflake className="text-4xl text-blue-500" />
                                <h4 className="text-2xl font-bold text-green-700 ml-2">Heat Transformed to A/C</h4>
                            </div>
                            <p className="text-4xl font-bold text-gray-800">{latestData.heatTransformedToAC} kWh</p>
                            <p className="text-gray-600 mt-2">
                                Heat transformed into air conditioning during summer.
                            </p>
                        </div>
                        {/* Earnings per hour Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center col-span-1 md:col-span-3 lg:grid-cols-3">
                            <div className="flex justify-center items-center mb-4">
                                <FaDollarSign className="text-4xl text-green-500" />
                                <h4 className="text-2xl font-bold text-green-700 ml-2">Savings per hour</h4>
                            </div>
                            <p className="text-4xl font-bold text-green-700">
                                ${calculateEarnings(latestData.heatUsedForPower)}
                            </p>
                            <p className="text-gray-600 mt-2">
                                Saved from using the heat recycling system.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* System Alerts Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <div className="flex justify-center items-center mb-4">
                                <FaExclamationTriangle className="text-4xl text-red-500" />
                                <h4 className="text-2xl font-bold text-green-700 ml-2">System Alerts</h4>
                            </div>
                            <p className="text-gray-600 mt-2">
                                {latestData.temperature > 90 
                                    ? <strong>Warning: High temperature detected!</strong>
                                    : "All systems are operating normally."}
                            </p>
                        </div>
                        {/* Environmental Impact Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <div className="flex justify-center items-center mb-4">
                                <FaLeaf className="text-4xl text-green-500" />
                                <h4 className="text-2xl font-bold text-green-700 ml-2">Environmental Impact</h4>
                            </div>
                            <p className="text-gray-600 mt-2">
                                CO2 emissions saved: <strong>{calculateCO2EmissionsSaved(latestData.heatUsedForPower)} kg</strong>
                            </p>
                        </div>
                    </div>

                    {/* Historical Data Chart */}
                    <div className="mt-8 bg-white shadow-md rounded-lg p-6">
                        <h4 className="text-2xl font-bold text-green-700 mb-4">Historical Data</h4>
                        <Line data={historicalData} />
                    </div>
                </>
            )}
        </div>
    );
};

export default HeatTemperatureManagement;