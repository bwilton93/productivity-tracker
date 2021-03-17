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
  document.getElementById("display-time").innerHTML ="Time elapsed: 0D:0H:0M";
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

  // Extract seconds from time and invert if past one minute (Seconds value = negative)
  // 0 minutes 24 seconds & 1 minute 36 seconds
  // 1 minute increments as per above
  // 0 - 24 = -24 seconds
  // 60 + -24 = 36 seconds
  // Final display would read 1M:36S
  let secondsSpent = endDate.getSeconds() - startDate.getSeconds();
  
  if (endDate.getSeconds() < startDate.getSeconds()) {
    secondsSpent = 60 + secondsSpent;
  }

  // Display total time in the H:M format
    timeDisplay = daysSpent.toString() + "D:" + 
      hoursSpent.toString() + "H:" + 
      minutesSpent.toString() + "M:" +
      secondsSpent.toString() + "S";
}
