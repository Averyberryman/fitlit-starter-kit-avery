const getRandomUser = (users) => {
  const randomUserIndex = Math.floor(Math.random()*users.length);
  return users[randomUserIndex];
}

export {getRandomUser}