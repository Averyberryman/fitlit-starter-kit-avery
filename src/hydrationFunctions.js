const averageDailyHydration = (userID, dataSet) => {
  const userHydration = dataSet.filter((hydroObj) => {
    return hydroObj.userID == userID;
  });
  const totalHydro = userHydration.reduce((acc, curr) => {
    acc += curr.numOunces;
    return acc;
  }, 0);
  return totalHydro / userHydration.length;
};

export { averageDailyHydration };
