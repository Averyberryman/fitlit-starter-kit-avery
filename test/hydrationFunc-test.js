import { expect } from 'chai';
import sampleHydration from '../src/data/sample-hydration';
import { averageDailyHydration } from '../src/hydrationFunctions';

describe('average daily hydration', () => {
  const dataSet = sampleHydration.sampleHydrationData;
  const userID = 1
  it('should calculate average daily hydration', () => {
    expect(averageDailyHydration(userID, dataSet)).to.equal(33)
  })
})