import { currentUser } from "./scripts";

const usersPromise = fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then((response) => response.json())
  .then((data) => data.users);

const hydroPromise = fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then((response) => response.json())
  .then((data) => data.hydrationData);

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
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
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
