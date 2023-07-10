import { expect } from 'chai';
import sampleUsers from '../src/data/sample-users';
import { getUserID } from '../src/userID';

describe("getUserID", () => {
    let users = sampleUsers;
    it("should find a user object based on their unique ID", () => {
        expect(getUserID(1).to.deep.equal(sampleUsers[0]))
    }) 
})
