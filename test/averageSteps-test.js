import { expect } from 'chai';
import sampleUsers from '../src/data/sample-users';
import { averageSteps } from '../src/averageSteps';

describe('average step count', () => {
  const users = sampleUsers.sampleUsers;

  it.skip('should be a function', () => {
    expect(typeof averageSteps).to.equal('function')
  })

  it.skip('should return average step goal of each user', () => {
    expect(averageSteps(users)).to.equal(6333)
  })
})