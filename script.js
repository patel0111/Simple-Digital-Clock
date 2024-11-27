// script.js
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];
    
    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;
  
    // Pad single digits with a leading zero
    const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);
  
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("ampm").textContent = ampm;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();
  