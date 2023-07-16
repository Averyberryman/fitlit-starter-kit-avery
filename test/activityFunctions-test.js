import { expect } from 'chai';
import sampleActivity from '../src/data/sample-activity';
import sampleUsers from '../src/data/sample-users';
import { milesWalkedOnDate, dailyActiveMinutes } from '../src/activityFunctions';

describe('milesWalkedOnDate', () => {
  const userID = 1;
  const date = '2023/03/24';
 
  it('should calculate total miles walked on a date by a user', () => {
    expect(milesWalkedOnDate(userID, date, sampleUsers, sampleActivity)).to.equal(5.6)
  })
})

describe('dailyActiveMinutes', () => {
  const userID = 1;
  const date = '2023/03/24';

  it('should get the users active minutes', () => {
    expect(dailyActiveMinutes(userID, date, sampleActivity)).to.equal(261)
  })
})