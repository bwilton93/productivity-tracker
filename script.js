let startDate;
let endDate; // (Year, Month-1, Day, Hour, Minute, Second)
let timeDisplay;
let ended = false;

function startButton() {
  startDate = new Date();
  document.getElementById("start-time").innerHTML = "Start time: " + startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds();
}

function endButton() {
  endDate = new Date();
  document.getElementById("end-time").innerHTML = "End time: " + endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds();

  // Run function
  timeDifference(startDate, endDate);

  // Display time spent in D:H:m format
  document.getElementById("display-time").innerHTML = "Time elapsed: " + timeDisplay;
}
  
function timeDifference() {
  // Get difference in time in milliseconds
  let millisecondsSpent = endDate.getTime() - startDate.getTime();
  
  // Convert milliseconds into minutes
  let totalMinutesSpent = (millisecondsSpent / 1000) / 60;
  
  // Convert minutes spent into Days, Hours and Minutes
  let totalHoursSpent = totalMinutesSpent / 60;
  let daysSpent = Math.floor(totalHoursSpent / 24);
  let hoursSpent = Math.floor(totalHoursSpent % 24);
  let minutesSpent = Math.floor(totalMinutesSpent % 60);
  
  // Display total time in the H:M format
  timeDisplay = daysSpent.toString() + "D:" + 
  hoursSpent.toString() + "H:" + 
  minutesSpent.toString() + "M";
}
