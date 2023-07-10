const averageSteps = (users) => {
  const totalStepGoal = users.reduce((acc, user) => {
    acc += user.dailyStepGoal;
    return acc;
  }, 0);
  return Math.floor(totalStepGoal / users.length);
};

export { averageSteps };
