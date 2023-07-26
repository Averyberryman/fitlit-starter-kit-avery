const milesWalkedOnDate = (userID, date, usersData, activityData) => {
  const user = usersData.find((user) => user.id === userID);
  if (!user) {
    return 0;
  }
  const userStride = user.strideLength;
  const userSteps = activityData.find(
    (activity) => activity.userID === userID && activity.date === date
  ).numSteps;
  const totalFeetWalked = userStride * userSteps;
  return Number((totalFeetWalked / 5280).toFixed(1));
};

const dailyActiveMinutes = (userID, date, activityData) => {
  const activity = activityData.find((activity) => activity.userID === userID && activity.date === date);
  if (!activity) {
    return 0;
  }
  return activityData.find(
    (activity) => activity.userID === userID && activity.date === date
  ).minutesActive;
};

const getWeeklyStepGoals = (user, activityData) => {
  const { id, dailyStepGoal } = user;
  const filteredActivityData = activityData.filter(
    (activity) => activity.userID === id
  );
  if (filteredActivityData.length === 0) {
    return []
  }
  const lastIndex = filteredActivityData.length - 1;
  const currentWeek = filteredActivityData.splice(lastIndex - 6, lastIndex);
  return currentWeek.map((day) => {
    const { date, numSteps } = day;
    const goalIsMet = numSteps >= dailyStepGoal;
    return `${date}: ${goalIsMet ? "pass" : "fail"}`;
  });
};
export { milesWalkedOnDate, dailyActiveMinutes, getWeeklyStepGoals };
