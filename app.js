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
function showDailyResults() {
  let workCurrentDay = 5;
  let pastHourDay = 7;
  let PlayCurrentDay = 1;
  let playPastDay = 2;
  let currentStudy = 0;
  let pastStudy = 1;
  let currentExercise = 1;
  let previousExercise = 1;
  let currentSocial = 1;
  let previousSocial = 3;
  let currentSelfCare = 0;
  let previousSelfCare = 1;
  currentWorkHour.innerText = workCurrentDay + "hrs";
  previousWorkHour.innerText = pastHourDay;
  playCurrentHour.innerText = PlayCurrentDay + "hrs";
  playPreviousHour.innerText = playPastDay;
  studyCurrentHour.innerText = currentStudy + "hrs";
  studyPreviousHour.innerText = pastStudy;
  exerciseCurrentHour.innerText = currentExercise + "hr";
  exercisePreviousHour.innerText = previousExercise;
  socialCurrentHour.innerText = currentSocial + "hr";
  socialPreviousHour.innerText = previousSocial;
  selfCareCurrentHour.innerText = currentSelfCare + "hr";
  selfCarePreviousHour.innerText = previousSelfCare;
}

// end of dailyfunction
weeklyButton.addEventListener("click", showWeeklyResults);
function showWeeklyResults() {
  let workCurrentWeek = 4;
  let pastHourWeek = 7;
  let PlayCurrentWeek = 10;
  let playPastWeek = 8;
  let currentStudyWeek = 4;
  let pastStudyWeek = 7;
  let currentExerciseWeek = 4;
  let previousExerciseWeek = 5;
  let currentSocialWeek = 5;
  let previousSocialWeek = 10;
  let currentSelfCareWeek = 2;
  let previousSelfCareWeek = 2;
  currentWorkHour.innerText = workCurrentWeek + "hrs";
  previousWorkHour.innerText = pastHourWeek;
  playCurrentHour.innerText = PlayCurrentWeek + "hrs";
  playPreviousHour.innerText = playPastWeek;
  studyCurrentHour.innerText = currentStudyWeek + "hrs";
  studyPreviousHour.innerText = pastStudyWeek;
  exerciseCurrentHour.innerText = currentExerciseWeek + "hr";
  exercisePreviousHour.innerText = previousExerciseWeek;
  socialCurrentHour.innerText = currentSocialWeek + "hr";
  socialPreviousHour.innerText = previousSocialWeek;
  selfCareCurrentHour.innerText = currentSelfCareWeek + "hr";
  selfCarePreviousHour.innerText = previousSelfCareWeek;
}

// end of weeklyFunction
monthButton.addEventListener("click", showMonthlyResults);
