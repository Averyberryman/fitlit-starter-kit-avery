const APICall = (url) => {
  const response = fetch(url);
  return response.then(response => {
    return response.json();
  })
  .catch(err => console.log(err))
};

export {
  APICall
};