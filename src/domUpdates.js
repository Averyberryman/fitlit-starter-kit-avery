// DOM MANIPULATION 

// IMPORTS
import {averageDailyHydration, getDailyOunces, getWeeklyOunces} from "./hydrationFunctions.js";
import { averageDailySleepHours, averageDailySleepQuality, getDailySleepHours, getDailySleepQuality, getWeeklySleepHours, getWeeklySleepQuality } from "./sleepFunctions.js";
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
const hydroBox = document.querySelector('.hydro');
const dailyHydro = document.querySelector('.hydro-daily');
const weeklyHydro = document.querySelector('.hydro-weekly');
const stepsBox = document.querySelector('.steps');
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
  stepsBox.innerText = `YOU: ${currentUser.dailyStepGoal} steps vs. THE WORLD: ${averageSteps(mainData.users)} steps`
}

const displayUserDailyHydration = () => {
  dailyHydro.innerHTML = `<div> You've consumed ${getDailyOunces(currentUser.id, mainData.hydration[mainData.hydration.length -1].date, mainData.hydration)}oz of water today! </div>`
}

// const displayUserWeeklyHydration = () => {
//   const weeklyOuncesData = getWeeklyOunces(currentUser.id, mainData.hydration[mainData.hydration.length -1].date, mainData.hydration);
//   Object.entries(weeklyOuncesData).forEach(([date, ounces]) => {
//   weeklyHydro.innerHTML = `<div> Daily water intake this week: Date: ${date}, Ounces: ${ounces}</div>`
// })}

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
  userDataElement,
  welcomeMessage,
  widgets,
  boxes,
  generalInfo,
}