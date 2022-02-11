//reducer -> is a function takes state and action and modifies state depending up on the action

export default (posts = [], action) => {
  // reducer function
  // in reduceer the state always need to be equal to something and ahould not be empty
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
