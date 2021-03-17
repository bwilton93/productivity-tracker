let startDate;
let endDate; // (Year, Month-1, Day, Hour, Minute, Second)
let timeDisplay;
let ended = false;

function startButton() {
  // Extract time at start of program
  startDate = new Date();
  document.getElementById("start-time").innerHTML = "Start time: " + startDate.getHours() + 
    ":" + startDate.getMinutes() + ":" + startDate.getSeconds();
}

function endButton() {
  // Extract time at end of program
  endDate = new Date();
  document.getElementById("end-time").innerHTML = "End time: " + endDate.getHours() +
    ":" + endDate.getMinutes() + ":" + endDate.getSeconds();

  // Run comparison function
  timeCalculation(startDate, endDate);

  // Display time spent in D:H:M:S format
  document.getElementById("display-time").innerHTML = "Time elapsed: " + timeDisplay;
}

function clearButton() {
  // Clear displayed information
  document.getElementById("start-time").innerHTML = "Start time: N/A";
  document.getElementById("end-time").innerHTML = "End time: N/A";
  document.getElementById("display-time").innerHTML ="Time elapsed: 0D:0H:0M:0S";
}

function timeCalculation() {
  // Get difference in time in milliseconds
  let millisecondsSpent = endDate.getTime() - startDate.getTime();
  
  // Convert milliseconds into minutes
  let totalMinutesSpent = (millisecondsSpent / 1000) / 60;
  
  // Convert minutes spent into Days, Hours and Minutes
  let totalHoursSpent = totalMinutesSpent / 60;
  let daysSpent = Math.floor(totalHoursSpent / 24);
  let hoursSpent = Math.floor(totalHoursSpent % 24);
  let minutesSpent = Math.floor(totalMinutesSpent % 60);

  
  // Calculate seconds and invert if second value is lower than first value
  let secondsSpent = endDate.getSeconds() - startDate.getSeconds();
  
  // Allows values past 1 minute to calculate correctly
  // If timer passes 60, value for secondsSpent would be negative
  if (endDate.getSeconds() < startDate.getSeconds()) {
    secondsSpent = 60 + secondsSpent; 
  }

  // Display total time in the H:M format
    timeDisplay = daysSpent.toString() + "D:" + 
      hoursSpent.toString() + "H:" + 
      minutesSpent.toString() + "M:" +
      secondsSpent.toString() + "S";
}
