// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
import { APICall } from "./apiCalls"

let usersData;
let sleepData;
let hydrationData;
let activityData;

const getUsersData = APICall("https://fitlit-api.herokuapp.com/api/v1/users");
const getSleepData = APICall("https://fitlit-api.herokuapp.com/api/v1/sleep");
const getHydrationData = APICall("https://fitlit-api.herokuapp.com/api/v1/hydration");
const getActivityData = APICall("https://fitlit-api.herokuapp.com/api/v1/activity");

const getAllData = () => {
  Promise.all([getUsersData, getSleepData, getHydrationData, getActivityData])
  .then((data) => {
      usersData = data[0];
      sleepData = data[1];
      hydrationData = data[2];
      activityData = data[3];
      console.log({usersData}, {sleepData}, {hydrationData}, {activityData});
    }
  );
};
window.addEventListener('load', getAllData);
