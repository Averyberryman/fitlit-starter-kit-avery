// DOM MANIPULATION 

// IMPORTS
import {getRandomUser} from "./getRandomUser.js";
import {averageDailyHydration, getDailyOunces, getWeeklyOunces} from "./hydrationFunctions.js";
import {averageSteps} from "./averageSteps.js";
import {mainData, currentUser} from "./scripts.js";


// QUERY SELECTORS
const userDataElement = document.querySelector('.user-data');
const welcomeMessage = document.querySelector('.welcome-message');
const widgets = document.querySelector('.widgets');
const boxes = document.querySelector('.box');
const generalInfo = document.querySelector('.general-info');

// DATAMODEL


// MODIFIERS
const displayUserData = () => {
return welcomeMessage.innerText = `Welcome, ${currentUser.name}!`

}

// EXPORTS
export {
  averageDailyHydration,
  getDailyOunces,
  getWeeklyOunces,
  averageSteps,
  displayUserData,
  userDataElement,
  welcomeMessage,
  widgets,
  boxes,
  generalInfo,
  // currentUser
}