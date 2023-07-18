import { expect } from 'chai';
import sampleSleep from '../src/data/sample-sleep';
import { averageDailySleepHours,
    averageDailySleepQuality,
    getDailySleepHours,
    getDailySleepQuality,
    getWeeklySleepHours,
    getWeeklySleepHoursAndQuality, } from '../src/sleepFunctions';

  describe('averageDailySleepHours', () => {
    it('should calculate the average number of hours slept per day for a user', () => {
      const userID = 1;
      const expectedAverage = 6.6; 

      const result = averageDailySleepHours(userID, sampleSleep.sampleSleepData);
      expect(result).to.equal(expectedAverage);
    });
  });

  describe('averageDailySleepQuality', () => {
    it('should calculate the average sleep quality per day for a user over all time', () => {
      const userID = 1;
      const expectedAverage = 3.6;

      const result = averageDailySleepQuality(userID, sampleSleep.sampleSleepData);
      expect(result).to.equal(expectedAverage);
    });
  });

  describe('getDailySleepHours', () => {
    it('should return the number of hours a user slept for a specific day', () => {
      const userID = 1;
      const date = '2023/03/24';
      const expectedHours = 9.6; 

      const result = getDailySleepHours(userID, date, sampleSleep.sampleSleepData);
      expect(result).to.equal(expectedHours);
    });
  });

  describe('getDailySleepQuality', () => {
    it('should return the sleep quality for a user on a specific day', () => {
      const userID = 1;
      const date = '2023/03/24';
      const expectedQuality = 4.3;

      const result = getDailySleepQuality(userID, date, sampleSleep.sampleSleepData);
      expect(result).to.equal(expectedQuality);
    });
  });

  describe('getWeeklySleepHoursAndQuality', () => {
    it('should return the number of hours a user slept each day over a given week', () => {
      const userID = 1;
      const endDate = '2023/03/30';
      const expectedHours = {
        '2023/03/24': [9.6, 4.3],
        '2023/03/25': [6.3, 3.3],
        '2023/03/26': [5.4, 3.1],
        '2023/03/27': [7.1, 4.7],
        '2023/03/28': [6, 4.6],
        '2023/03/29': [5.6, 2.1],
        '2023/03/30': [6.2, 3.3]
      };

      const result = getWeeklySleepHoursAndQuality(userID, endDate, sampleSleep.sampleSleepData);
      expect(result).to.deep.equal(expectedHours);
    });
  });
