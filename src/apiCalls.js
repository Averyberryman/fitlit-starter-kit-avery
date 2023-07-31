import { currentUser } from "./scripts";
import { displayUserDailyHydration, displayUserWeeklyHydration } from "./domUpdates";

const usersPromise = fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then((response) => response.json())
  .then((data) => data.users);

const hydroPromise = fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then((response) => response.json())
  .then((data) => data.hydrationData);


// export const hydroInput = (userID, date, numOunces) => {
//   fetch("http://localhost:3001/api/v1/hydration", {
//     method: "POST",
//     body: JSON.stringify({
//       userID,
//       date,
//       numOunces,
//     }),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((data) => (fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
//     .then((response) => response.json())
//     .then((data) => data.hydrationData)))
//     .catch((error) => console.log('You can\'t do that!', error));
// };

export const hydroInput = (userID, date, numOunces) => {
  fetch("http://localhost:3001/api/v1/hydration", {
    method: "POST",
    body: JSON.stringify({
      userID,
      date,
      numOunces,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      // Assuming the server responds with the updated hydration data
      // Update the mainData.hydration array with the new data
      mainData.hydration = data.hydrationData;
      
      // Now, update the DOM with the new hydration data
      displayUserDailyHydration();
      displayUserWeeklyHydration();
    })
    .catch((error) => console.log('You can\'t do that!', error));
};

const sleepPromise = fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then((response) => response.json())
  .then((data) => data.sleepData);

const activityPromise = fetch(
  "https://fitlit-api.herokuapp.com/api/v1/activity"
)
  .then((response) => response.json())
  .then((data) => data.activityData);

export const promises = [
  usersPromise,
  hydroPromise,
  sleepPromise,
  activityPromise,
];

// convert these promises into functions and invoke them?
// if path === sketchy, take getHydro & paste into .then on line 23