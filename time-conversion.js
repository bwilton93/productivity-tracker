// Collect start and end time
let startDate = new Date();
let endDate = new Date(); // (Year, Month-1, Day, Hour, Minute, Second)
let timeDisplay;

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
    minutesSpent.toString() + "m";
}

// Run function
timeDifference(startDate, endDate);

// Display time spent in D:H:m format
timeDisplay;
