
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use a JS file
import { promises } from "./apiCalls"
import { displayUserData, displayUserInfo, displayUserStepGoal, displayUserDailyHydration, displayUserWeeklyHydration, displayUserDailySleep, displayUserWeeklySleep, displayUserAverageSleepData, displayUserMilesWalked, displayUserMinutesActive, displayUserSteps, displayUserWeeklyStepGoal, } from "./domUpdates"
import { getRandomUser } from './getRandomUser';

const mainData = {};
let currentUser;
const startWebPage = () => {
  currentUser = getRandomUser(mainData.users);
  displayUserData();
  displayUserInfo();
  displayUserStepGoal();
  displayUserDailyHydration();
  displayUserWeeklyHydration();
  displayUserDailySleep();
  displayUserWeeklySleep();
  displayUserAverageSleepData();
  displayUserMilesWalked();
  displayUserMinutesActive();
  displayUserSteps();
  displayUserWeeklyStepGoal();
}

window.addEventListener('load', () => {
  Promise.all(promises)
  .then(response => {
    const [usersPromise, hydroPromise, sleepPromise, activityPromise] = response;
    mainData.users = usersPromise;
    mainData.hydration = hydroPromise;
    mainData.sleep = sleepPromise;
    mainData.activity = activityPromise;
  })
  .then(startWebPage)
});
 export {
  mainData,
  currentUser
}
