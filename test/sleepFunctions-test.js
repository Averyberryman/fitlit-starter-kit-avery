import { expect } from 'chai';
import sampleSleepData from '../src/data/sample-sleep';
import { averageDailySleepHours,
    averageDailySleepQuality,
    getDailySleepHours,
    getDailySleepQuality,
    getWeeklySleepHours,
    getWeeklySleepQuality, } from '../src/sleepFunctions';

  describe('averageDailySleepHours', () => {
    it('should calculate the average number of hours slept per day for a user', () => {
      const userID = 1;
      const expectedAverage = 6.6; 

      const result = averageDailySleepHours(userID, sampleSleepData);
      expect(result).to.equal(expectedAverage);
    });
  });

  describe('averageDailySleepQuality', () => {
    it.skip('should calculate the average sleep quality per day for a user over all time', () => {
      const userID = 1;
      const expectedAverage = 4.3; // Replace with the expected average

      const result = averageDailySleepQuality(userID, dataSet);
      expect(result).to.equal(expectedAverage);
    });
  });

  describe('getDailySleepHours', () => {
    it.skip('should return the number of hours a user slept for a specific day', () => {
      const userID = 1;
      const date = '2023/03/24';
      const expectedHours = 9.6; // Replace with the expected hours

      const result = getDailySleepHours(userID, date, dataSet);
      expect(result).to.equal(expectedHours);
    });
  });

  describe('getDailySleepQuality', () => {
    it.skip('should return the sleep quality for a user on a specific day', () => {
      const userID = 1;
      const date = '2023/03/24';
      const expectedQuality = 4.3; // Replace with the expected quality

      const result = getDailySleepQuality(userID, date, dataSet);
      expect(result).to.equal(expectedQuality);
    });
  });

  describe('getWeeklySleepHours', () => {
    it.skip('should return the number of hours a user slept each day over a given week', () => {
      const userID = 1;
      const endDate = '2023/03/30';
      const expectedHours = {
        '2023/03/24': 9.6,
        '2023/03/25': 6.3,
        // Add more expected daily hours as needed
      };

      const result = getWeeklySleepHours(userID, endDate, dataSet);
      expect(result).to.deep.equal(expectedHours);
    });
  });

  describe('getWeeklySleepQuality', () => {
    it.skip('should return the sleep quality for each day over a given week', () => {
      const userID = 1;
      const endDate = '2023/03/30';
      const expectedQuality = {
        '2023/03/24': 4.3,
        '2023/03/25': 3.3,
        // Add more expected daily qualities as needed
      };

      const result = getWeeklySleepQuality(userID, endDate, dataSet);
      expect(result).to.deep.equal(expectedQuality);
    });
  });
