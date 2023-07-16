const milesWalkedOnDate = (userID, date, usersData, activityData) => {
  const userStride = usersData.find((user) => user.id === userID).strideLength;
  const userSteps = activityData.find((activity) => activity.userID === userID && activity.date === date).numSteps;
  const totalFeetWalked = userStride * userSteps;
  return Number((totalFeetWalked / 5280).toFixed(1));
};

const dailyActiveMinutes = (userID, date, activityData) => {
return activityData.find((activity) => activity.userID === userID && activity.date === date).minutesActive
}

const metDailyStepGoal = (userID, date, usersData, activityData) => {
  const userStepGoal = usersData.find((user) => user.id === userID).dailyStepGoal;
  const stepsOnDate = activityData.find((activity) => activity.userID === userID && activity.date === date).numSteps;
  if (stepsOnDate >= userStepGoal) {
    return `You have met your ${userStepGoal} steps goal!`
  } else {
    return `You've walked ${stepsOnDate} out of ${userStepGoal}. `
  }
};
// IT 5: weekly view of step count and see if goal for each day has been reached
// const weekStepGoals = () => {

// };

export { 
  milesWalkedOnDate,
  dailyActiveMinutes,
  metDailyStepGoal,
  weekStepGoals
}