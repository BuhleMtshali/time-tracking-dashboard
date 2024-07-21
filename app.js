let dailyButton = document.getElementById("daily-button");
let weeklyButton = document.getElementById("weekly-button");
let monthButton = document.getElementById("monthlyButton");
let currentWorkHour = document.getElementById("work-hours");
let previousWorkHour = document.getElementById("previous-work-hours");
let playCurrentHour = document.getElementById("play-current-hour");
let playPreviousHour = document.getElementById("play-previous-hours");
let studyCurrentHour = document.getElementById("study-current-hour");
let studyPreviousHour = document.getElementById("previous-play-hours");
let exerciseCurrentHour = document.getElementById("exercise-current-hour");
let exercisePreviousHour = document.getElementById("exercise-previous");
let socialCurrentHour = document.getElementById("current-hour-social");
let socialPreviousHour = document.getElementById("previous-social");
let selfCareCurrentHour = document.getElementById("self-care-current");
let selfCarePreviousHour = document.getElementById("self-care-previous");

dailyButton.addEventListener("click", showDailyResults);
weeklyButton.addEventListener("click", showWeeklyResults);
monthButton.addEventListener("click", showMonthlyResults);
