const generateSensorData = () => {
    const now = new Date();
    const sensors = [];
    const types = [
      "Temperature",
      "Humidity",
      "Power Consumption",
      "CPU Usage",
      "Network Traffic",
      "Disk",
    ];
  
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    const interval = 24 * 60 * 60 * 1000;
  
    for (let i = 0; i < 365; i++) {
      const timestamp = new Date(oneYearAgo.getTime() + i * interval);
      types.forEach((type) => {
        const baseValue = 50;
        const variation = Math.sin(i / 10) * 10;
        const value = baseValue + variation + Math.random() * 5;
  
        sensors.push({
          id: sensors.length + 1,
          type,
          value: value.toFixed(2),
          timestamp: timestamp.toISOString(),
          details: `${type} is within expected range.`,
        });
      });
    }
  
    return sensors;
  };
  
  let sensorData = generateSensorData();
  
  const updateSensorData = () => {
    const now = new Date();
    const types = [
      "Temperature",
      "Humidity",
      "Power Consumption",
      "CPU Usage",
      "Network Traffic",
      "Disk",
    ];
  
    const timestamp = now.toISOString();
  
    types.forEach((type) => {
      const baseValue = 50;
      const variation = Math.sin(sensorData.length / 10) * 10;
      const value = baseValue + variation + Math.random() * 5;
  
      sensorData.push({
        id: sensorData.length + 1,
        type,
        value: value.toFixed(2),
        timestamp,
        details: `${type} update received.`,
      });
  
      if (sensorData.length > 1000) {
        sensorData = sensorData.slice(-1000); // Limit data to last 1000 records
      }
    });
  };
  
  setInterval(updateSensorData, 10000);
  
  export { sensorData };