const milesWalkedOnDate = (userID, date, usersData, activityData) => {
  const userStride = usersData.usersData.find((user) => user.id === userID).strideLength;
  const userSteps = activityData.activityData.find((activity) => activity.userID === userID && activity.date === date).numSteps;
  const totalFeetWalked = userStride * userSteps;
  return Number((totalFeetWalked / 5280).toFixed(1));
};

const dailyActiveMinutes = (userID, date, activityData) => {
return activityData.activityData.find((activity) => activity.userID === userID && activity.date === date).minutesActive
}

export { 
  milesWalkedOnDate,
  dailyActiveMinutes
}