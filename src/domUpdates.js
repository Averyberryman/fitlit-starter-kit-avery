//NOTE: Your DOM manipulation will occur in this file

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
// const exampleFunction1 = (person) => {
//   console.log(`oh hi there ${person}`)
// }

// const exampleFunction2 = (person) => {
//   console.log(`bye now ${person}`)
// }


// export {
//   exampleFunction1,
//   exampleFunction2,
// }

// DOM MANIPULATION 

// IMPORTS
import {getRandomUser} from "./functions/getRandomUser.js";
import {averageDailyHydration, getDailyOunces, getWeeklyOunces} from "./functions/hydrationFunctions.js";
import {averageSteps} from "./functions/averageSteps.js";

// QUERY SELECTORS
const userDataElement = document.querySelector('.user-data');
const welcomeMessage = document.querySelector('.welcome-message');
const widgets = document.querySelector('.widgets');
const boxes = document.querySelector('.box');
const generalInfo = document.querySelector('.general-info');

// DATAMODEL

// MODIFIERS

// EXPORTS