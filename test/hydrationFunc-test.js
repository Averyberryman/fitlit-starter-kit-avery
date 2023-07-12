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
  const userID = 1;
  const dataSet = sampleHydration.sampleHydrationData;
  const date = "?"

  it('should return a user\'s total fluid ounces over 7 days', () => {
    expect(getWeeklyOunces(userID, date, dataSet)).to.be.a('object')

  })
})


