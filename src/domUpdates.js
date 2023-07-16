// DOM MANIPULATION 

// IMPORTS
// import {getRandomUser} from "./getRandomUser.js";
import {averageDailyHydration, getDailyOunces, getWeeklyOunces} from "./hydrationFunctions.js";
import {averageSteps} from "./averageSteps.js";
import {mainData, currentUser} from "./scripts.js";

// QUERY SELECTORS
const userDataElement = document.querySelector('.user-data');
const welcomeMessage = document.querySelector('.welcome-message');
const widgets = document.querySelector('.widgets');
const boxes = document.querySelector('.box');
const sleepBox = document.querySelector('.sleep');
const hydroBox = document.querySelector('.hydro');
const stepsBox = document.querySelector('.steps');
const generalInfo = document.querySelector('.general-info');

// DATAMODEL

// MODIFIERS
const displayUserData = () => {
return welcomeMessage.innerText = `Welcome, ${currentUser.name}!`
}

const displayUserInfo = () => {
  generalInfo.innerHTML = `<div>${currentUser.address}
  ${currentUser.email} ${currentUser.strideLength} feet ${currentUser.dailyStepGoal} ${currentUser.friends.length} friends </div>`
}

const displayUserStepGoal = () => {
  stepsBox.innerText = `YOU ${currentUser.dailyStepGoal} vs. THE WORLD ${averageSteps(mainData.users)}`
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
  userDataElement,
  welcomeMessage,
  widgets,
  boxes,
  generalInfo,
  }