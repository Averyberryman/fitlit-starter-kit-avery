import { expect } from 'chai';
import sampleHydration from '../src/data/sample-hydration';
import { averageDailyHydration } from '../src/hydrationFunctions';
import { getDailyOunces, getWeeklyOunces } from '../src/hydrationFunctions';

describe('average daily hydration', () => {
  const dataSet = sampleHydration.sampleHydrationData;
  const userID = 1
  it('should calculate average daily hydration', () => {
    expect(averageDailyHydration(userID, dataSet)).to.equal(50)
  })
})

describe('get user fluid ounces for a specific day', () => {
  const dataSet = sampleHydration.sampleHydrationData;
  const userID = 3;
  const date = '2023/03/24';

  it('should return user fluid ounces for a specific day', () => {
    expect(getDailyOunces(userID, date, dataSet)).to.equal(95);
  });

  it('should return 0 if user fluid ounces are not available for the specific day', () => {
    const nonExistingDate = '2023/03/32';
    expect(getDailyOunces(userID, nonExistingDate, dataSet)).to.equal(0);
  });
});

describe('getWeeklyOunces', () => {
  it('should return the correct weekly ounces for user 1 ending on the specified date', () => {
    const userID = 1;
    const endDate = '2023/03/30';
    const expectedOutput = {
      '2023/03/24': 28,
      '2023/03/25': 50,
      '2023/03/26': 21,
      '2023/03/27': 63,
      '2023/03/28': 97,
      '2023/03/29': 20,
      '2023/03/30': 76
    };

    const output = getWeeklyOunces(userID, endDate, sampleHydration.sampleHydrationData);
    expect(output).to.deep.equal(expectedOutput);
  });
});

