const averageDailySleepHours = (userID, dataSet) => {
    const userSleepData = dataSet.filter((sleepObj) => sleepObj.userID === userID);
    const totalSleepHours = userSleepData.reduce((acc, curr) => acc + curr.hoursSlept, 0);
    return Math.round((totalSleepHours / userSleepData.length) * 1e1)/1e1;
  };
  
  const averageDailySleepQuality = (userID, dataSet) => {
    const userSleepData = dataSet.filter((sleepObj) => sleepObj.userID === userID);
    const totalSleepQuality = userSleepData.reduce((acc, curr) => acc + curr.sleepQuality, 0);
    return Math.round((totalSleepQuality / userSleepData.length) * 1e1)/1e1;
  };
  
  const getDailySleepHours = (userID, date, dataSet) => {
    const userSleepData = dataSet.find((sleepObj) => sleepObj.userID === userID && sleepObj.date === date);
    return userSleepData ? userSleepData.hoursSlept : 0;
  };
  
  const getDailySleepQuality = (userID, date, dataSet) => {
    const userSleepData = dataSet.find((sleepObj) => sleepObj.userID === userID && sleepObj.date === date);
    return userSleepData ? userSleepData.sleepQuality : 0;
  };
  
  const getWeeklySleepHours = (userID, endDate, dataSet) => {
    const userSleepData = dataSet.filter((sleepObj) => sleepObj.userID === userID);
    const weeklyData = userSleepData.filter((sleepObj) => {
      const sleepDate = new Date(sleepObj.date);
      const endDateObj = new Date(endDate);
      const startDateObj = new Date(endDateObj.getFullYear(), endDateObj.getMonth(), endDateObj.getDate() - 6);
      return sleepDate >= startDateObj && sleepDate <= endDateObj;
    });
  
    const dailySleepHours = {};
    weeklyData.forEach((sleepObj) => {
      const date = sleepObj.date;
      const hours = sleepObj.hoursSlept;
      dailySleepHours[date] = hours;
    });
  
    return dailySleepHours;
  };
  
  const getWeeklySleepQuality = (userID, endDate, dataSet) => {
    const userSleepData = dataSet.filter((sleepObj) => sleepObj.userID === userID);
    const weeklyData = userSleepData.filter((sleepObj) => {
      const sleepDate = new Date(sleepObj.date);
      const endDateObj = new Date(endDate);
      const startDateObj = new Date(endDateObj.getFullYear(), endDateObj.getMonth(), endDateObj.getDate() - 6);
      return sleepDate >= startDateObj && sleepDate <= endDateObj;
    });
  
    const dailySleepQuality = {};
    weeklyData.forEach((sleepObj) => {
      const date = sleepObj.date;
      const quality = sleepObj.sleepQuality;
      dailySleepQuality[date] = quality;
    });
  
    return dailySleepQuality;
  };
  
  export { averageDailySleepHours };
  export { averageDailySleepQuality };
  export { getDailySleepHours };
  export { getDailySleepQuality };
  export { getWeeklySleepHours };
  export { getWeeklySleepQuality };
  