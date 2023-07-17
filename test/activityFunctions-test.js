import { expect } from 'chai';
import sampleActivity from '../src/data/sample-activity';
import sampleUsers from '../src/data/sample-users';
import { milesWalkedOnDate, dailyActiveMinutes, metDailyStepGoal } from '../src/activityFunctions';


describe('milesWalkedOnDate', () => {
  const userID = 1;
  const date = '2023/03/24';
  const activityData = sampleActivity.sampleActivityData;
  const usersData = sampleUsers.sampleUsers;
  it('should calculate total miles walked on a date by a user', () => {
    expect(milesWalkedOnDate(userID, date, usersData, activityData)).to.equal(5.6)
  })
})

describe('dailyActiveMinutes', () => {
  const userID = 1;
  const date = '2023/03/24';
  const activityData = sampleActivity.sampleActivityData;
  
  it('should get the users active minutes', () => {
    expect(dailyActiveMinutes(userID, date, activityData)).to.equal(261)
  })
})

// describe('metDailyStepGoal', () => {
//   const userID = 1;
//   const date = '2023/03/24';
//   const activityData = sampleActivity.sampleActivityData;
//   const usersData = sampleUsers.sampleUsers

//   it('should determine if a user has met their step goal on a given day', () => {
//     expect(metDailyStepGoal(userID, date, usersData, activityData)).to.equal(`You have met your 7000 steps goal!`)
//   })
// })
// // // IT 5: weekly view of step count and see if goal for each day has been reached
// // describe('weekStepGoals', () => {
// //   it('should check if the step goal was met for each day in the week', () => {
// //     weekStepGoals()
// //   })
// // })