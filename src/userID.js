import sampleUsers from "./data/sample-users"

const getUserID = (userID) => sampleUsers.sampleUsers.find((user) => user.id === userID);



export{getUserID}
