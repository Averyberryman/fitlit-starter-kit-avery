// DOM MANIPULATION 

// IMPORTS
import {averageDailyHydration, getDailyOunces, getWeeklyOunces} from "./hydrationFunctions.js";
import { averageDailySleepHours, averageDailySleepQuality, getDailySleepHours, getDailySleepQuality, getWeeklySleepHours, } from "./sleepFunctions.js";
import { milesWalkedOnDate, dailyActiveMinutes, metDailyStepGoal, getWeeklyStepGoals } from "./activityFunctions.js";
import {averageSteps} from "./averageSteps.js";
import {mainData, currentUser} from "./scripts.js";


// QUERY SELECTORS
const userDataElement = document.querySelector('.user-data');
const welcomeMessage = document.querySelector('.welcome-message');
const widgets = document.querySelector('.widgets');
const boxes = document.querySelector('.box');
const sleepBox = document.querySelector('.sleep');
const dailySleep = document.querySelector('.sleep-daily')
const weeklySleep = document.querySelector('.sleep-weekly')
const sleepAverage = document.querySelector('.sleep-averages')
const hydroBox = document.querySelector('.hydro');
const dailyHydro = document.querySelector('.hydro-daily');
const weeklyHydro = document.querySelector('.hydro-weekly');
const userStepsToday = document.querySelector('.user-steps');
const userStepsGoal= document.querySelector('.user-step-goal');
const milesWalked = document.querySelector('.miles-activity');
const userMinutesActive = document.querySelector('.user-active-minutes');
const userWeeklyStepGoal = document.querySelector('.user-weekly-step-goal');
const generalInfo = document.querySelector('.general-info');

// DATAMODEL

// MODIFIERS
const displayUserData = () => {
return welcomeMessage.innerText = `Welcome, ${currentUser.name}!`;
}

const displayUserInfo = () => {
  generalInfo.innerHTML = `<div>${currentUser.address}
  ${currentUser.email} ${currentUser.strideLength} feet ${currentUser.dailyStepGoal} ${currentUser.friends.length} friends </div>`
}

const displayUserStepGoal = () => {
  userStepsGoal.innerText = `YOU: ${currentUser.dailyStepGoal} steps vs. THE WORLD: ${averageSteps(mainData.users)} steps`
}

const displayUserWeeklyStepGoal = () => {
  const weeklyStepsData = getWeeklyStepGoals(currentUser, mainData.activity);
  const weeklyStepGoals = weeklyStepsData.map((goalStatus) => {
    return `<div>${goalStatus}</div>`;
  }).join('');
  userWeeklyStepGoal.innerHTML = weeklyStepGoals;
};


const displayUserDailyHydration = () => {
  dailyHydro.innerHTML = `<div> You've consumed ${getDailyOunces(currentUser.id, mainData.hydration[mainData.hydration.length -1].date, mainData.hydration)}oz of water today! </div>`
}

const displayUserWeeklyHydration = () => {
  const weeklyOuncesData = getWeeklyOunces(currentUser.id, mainData.hydration[mainData.hydration.length - 1].date, mainData.hydration);
  const weeklyHydrationContent = Object.entries(weeklyOuncesData).map(([date, ounces]) => {
    return `<div>${date}: ${ounces}oz</div>`;
  }).join('');
  weeklyHydro.innerHTML = weeklyHydrationContent;
};

const displayUserDailySleep = () => {
  dailySleep.innerText = `You slept ${getDailySleepHours(currentUser.id, mainData.sleep[mainData.sleep.length -1].date, mainData.sleep)} hours last night. Your sleep quality was ${getDailySleepQuality(currentUser.id, mainData.sleep[mainData.sleep.length -1].date, mainData.sleep)}.`
}

const displayUserWeeklySleep = () => {
  const weeklySleepData = getWeeklySleepHours(currentUser.id, mainData.sleep[mainData.sleep.length - 1].date, mainData.sleep);
  const weeklySleepContent = Object.entries(weeklySleepData).map(([date, hours]) => {
    return `<div>${date}: ${hours[0]} hrs, Quality: ${hours[1]}.</div>`;
  }).join('');
  weeklySleep.innerHTML = weeklySleepContent;
};

const displayUserAverageSleepData = () => {
  const averageSleepHours = averageDailySleepHours(currentUser.id, mainData.sleep);
  const averageSleepQuality = averageDailySleepQuality(currentUser.id, mainData.sleep);
  sleepAverage.innerText = `You are averaging ${averageSleepHours} hrs per night with an average sleep quality of ${averageSleepQuality}.`
}

const displayUserSteps = () => {
  const today = mainData.activity[mainData.activity.length - 1].date;
  const userSteps = mainData.activity.find((activity) => activity.userID === currentUser.id && activity.date === today).numSteps;
  userStepsToday.innerText = `You have taken ${userSteps} steps today!`
}

const displayUserMilesWalked = () => {
  milesWalked.innerText = `Miles walked today: ${milesWalkedOnDate(currentUser.id, mainData.activity[mainData.activity.length - 1].date, mainData.users, mainData.activity)}`
}

const displayUserMinutesActive = () => {
  userMinutesActive.innerText = `Active minutes: ${dailyActiveMinutes(currentUser.id, mainData.activity[mainData.activity.length - 1].date, mainData.activity)}`
}


// EXPORTS
export {
  averageDailyHydration,
  getDailyOunces,
  getWeeklyOunces,
  averageSteps,
  displayUserData,
  displayUserInfo,
  displayUserStepGoal,
  displayUserDailyHydration,
  displayUserWeeklyHydration,
  displayUserDailySleep,
  displayUserWeeklySleep,
  displayUserAverageSleepData,
  displayUserMilesWalked,
  displayUserMinutesActive,
  displayUserSteps,
  displayUserWeeklyStepGoal,
  userDataElement,
  welcomeMessage,
  widgets,
  boxes,
  generalInfo,
}