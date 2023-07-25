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
  }
};

const getWeeklyOunces = (userID, endDate, dataSet) => {
  const userHydration = dataSet.filter(
    (hydroObj) => hydroObj.userID === userID
  );
  const weeklyData = userHydration.filter((hydroObj) => {
    const hydroDate = new Date(hydroObj.date);
    const endDateObj = new Date(endDate);
    const startDateObj = new Date(
      endDateObj.getFullYear(),
      endDateObj.getMonth(),
      endDateObj.getDate() - 6
    );
    console.log(hydroDate >= startDateObj && hydroDate <= endDateObj);
    return hydroDate >= startDateObj && hydroDate <= endDateObj;
  });

  const dailyOunces = {};
  weeklyData.forEach((hydroObj) => {
    const date = hydroObj.date;
    const ounces = hydroObj.numOunces;
    dailyOunces[date] = ounces;
  });

  return dailyOunces;
};

export { 
  getDailyOunces, 
  averageDailyHydration, 
  getWeeklyOunces 
};
