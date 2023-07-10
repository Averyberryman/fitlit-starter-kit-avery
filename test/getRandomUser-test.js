import { expect } from 'chai';
import { getRandomUser } from '../src/getRandomUser';
import sampleUsers from '../src/data/sample-users';

describe('getRandomUser function', () => {
  const users = sampleUsers.sampleUsers;
  it('should be a function', () => {
    expect(typeof getRandomUser).to.equal('function');
  });
  it('should return an object from users data', () => {
    expect(typeof getRandomUser(users)).to.equal('object');
  });
  it('should return an object with user data', () => {
    expect(getRandomUser(users).id).to.exist;
  });
});
