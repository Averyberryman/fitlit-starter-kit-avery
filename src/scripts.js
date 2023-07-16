// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
import { promises } from "./apiCalls"
import {getRandomUser} from "./getRandomUser"

const mainData = {};

    const startWebPage = () => {
      console.log(getRandomUser(mainData.users))
      
      }
    window.addEventListener('load', () => {
      Promise.all(promises)
      .then(response => {
        const [usersPromise, hyrdoPromise, sleepPromise, activityPromise] = response;
        mainData.users = usersPromise;
        mainData.hydration = hyrdoPromise;
        mainData.sleep = sleepPromise;
        mainData.activity = activityPromise;
      })
      .then(startWebPage)
    });

