const averageDailyHydration = (userID, dataSet) => {
  const userHydration = dataSet.filter((hydroObj) => {
    return hydroObj.userID == userID;
  });
  const totalHydro = userHydration.reduce((acc, curr) => {
    acc += curr.numOunces;
    return acc;
  }, 0);
  return Math.floor(totalHydro / userHydration.length);
};

const getDailyOunces = (userID, date, dataSet) => {
  const userHydration = dataSet.find((hydroObj) => {
    return hydroObj.userID === userID && hydroObj.date === date;
  });

  if (userHydration) {
    return userHydration.numOunces;
  } else {

  return 0;
}};

const getWeeklyOunces = (userID, date, dataSet) => {
  const userHydration = dataSet.filter((hydroObj) => 
  hydroObj.userID === userID);
  return userHydration.reduce((acc, curr) => {
    acc[curr.date] = curr.numOunces
    return acc
  }, {})

  }


export { getDailyOunces };
export { averageDailyHydration };
export { getWeeklyOunces };
