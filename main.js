// DISPLAY CURRENT TIME
function updateTime() {
  // Create a new Date object
  const now = new Date();

  // Get the current hours, minutes, and seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the time with leading zeros
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // Display the current time
  document.getElementById("currentTime").innerHTML =
    "Current time is " + formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time display
updateTime();

//DISPLAY CURRENT DAY
// Create a new Date object
const today = new Date();

// Array of days of the week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the current day of the week
const currentDay = `Today is ${daysOfWeek[today.getDay()]}`;

// Display the current day
document.getElementById("currentDay").innerHTML = currentDay;
