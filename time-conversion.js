// Collect start and end time
let startDate = new Date();
let startTime = startDate.getHours().toString() + ":" + startDate.getMinutes().toString() + ":" + startDate.getSeconds().toString();
let endTime = '19:28:92';
let timeDisplay;

function timeDifference() {
    // Split time at colon
    let startTimeSplit = startTime.split(':');
    let endTimeSplit = endTime.split(':');
    
    // Convert hours into minutes by multiplying by 60 - the number of minutes in an hour
    let startMinutes = (Number(startTimeSplit[0])) * 60 + (Number(startTimeSplit[1]));
    let endMinutes = (Number(endTimeSplit[0])) * 60 + (Number(endTimeSplit[1]));
    
    // Calculate actual minutes spent
    let totalMinutesSpent = endMinutes - startMinutes;
    
    // Convert minutes spent into hours and minutes
    let hoursSpent = Math.floor(totalMinutesSpent / 60);
    let minutesSpent = totalMinutesSpent % 60;
    
    // Display total time in the H:M format
    timeDisplay = hoursSpent.toString() + "H" + minutesSpent.toString() + "m";
}

timeDifference(startTime, endTime);
timeDisplay;
