const temp = 8;
const windSpeed = 15;

document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const calculateWindChill = (temp, windSpeed) => 
    13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
  

  window.onload = () => document.getElementById("wind-chill").textContent = 
    (temp <= 10 && windSpeed > 4.8) ? `Wind Chill: ${calculateWindChill(temp, windSpeed).toFixed(2)} °C` : "Wind Chill: N/A";