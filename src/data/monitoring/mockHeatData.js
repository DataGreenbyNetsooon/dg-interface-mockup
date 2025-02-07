/**
 * Generates mock heat data for the past year.
 *
 * @returns {Array<Object>} An array of objects representing daily heat data.
 * Each object contains the following properties:
 * - date {string}: The date in YYYY-MM-DD format.
 * - temperature {string}: The temperature in °C, with one decimal place.
 * - heatUsedForPower {string}: The amount of heat used for power, rounded to the nearest integer.
 * - heatTransformedToAC {string}: The amount of heat transformed to AC, rounded to the nearest integer.
 */

const generateHeatData = () => {
    const now = new Date();
    const heatData = [];
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    const interval = 24 * 60 * 60 * 1000; // Daily data
  
    for (let i = 0; i < 365; i++) {
      const timestamp = new Date(oneYearAgo.getTime() + i * interval);
      const temperature = 80 + Math.sin(i / 10) * 5 + Math.random() * 2; // Base temperature around 80°C
      const heatUsedForPower = 100 + Math.sin(i / 10) * 10 + Math.random() * 5;
      const heatTransformedToAC = 50 + Math.sin(i / 10) * 5 + Math.random() * 2;
  
      heatData.push({
        date: timestamp.toISOString().split('T')[0],
        temperature: temperature.toFixed(1),
        heatUsedForPower: heatUsedForPower.toFixed(0),
        heatTransformedToAC: heatTransformedToAC.toFixed(0),
      });
    }
  
    return heatData;
  };
  
  let heatData = generateHeatData();
  
  const updateHeatData = () => {
    const now = new Date();
    const timestamp = now.toISOString().split('T')[0];
    const temperature = 80 + Math.sin(heatData.length / 10) * 5 + Math.random() * 2;
    const heatUsedForPower = 100 + Math.sin(heatData.length / 10) * 10 + Math.random() * 5;
    const heatTransformedToAC = 50 + Math.sin(heatData.length / 10) * 5 + Math.random() * 2;
  
    heatData.push({
      date: timestamp,
      temperature: temperature.toFixed(1),
      heatUsedForPower: heatUsedForPower.toFixed(0),
      heatTransformedToAC: heatTransformedToAC.toFixed(0),
    });
  
    if (heatData.length > 1000) {
      heatData = heatData.slice(-1000); // Limit data to last 1000 records
    }
  };
  
  setInterval(updateHeatData, 3000);
  
  export { heatData as mockHeatData };