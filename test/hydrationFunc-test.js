import { expect } from 'chai';
import sampleHydration from '../src/data/sample-hydration';
import { averageDailyHydration } from '../src/hydrationFunctions';
import { getDailyOunces } from '../src/hydrationFunctions';


describe('average daily hydration', () => {
  const dataSet = sampleHydration.sampleHydrationData;
  const userID = 1
  it('should calculate average daily hydration', () => {
    expect(averageDailyHydration(userID, dataSet)).to.equal(33)
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
    const nonExistingDate = '2023/03/27';
    expect(getDailyOunces(userID, nonExistingDate, dataSet)).to.equal(0);
  });
});



