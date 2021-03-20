export const GET_USERS='GET_USERS';
export const ADD_USER='ADD_USER';
export const PUT_MESSAGE='PUT_MESSAGE';
export const DUPLICATE_FOUND='DUPLICATE_FOUND';
export const ADDED_USER='ADDED_USER';
export const PUT_USERS='PUT_USERS';
export const ROUTING_VALUE='ROUTING_VALUE';



export const getUsers = () => ({
    type: GET_USERS,
  });
  
  export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
  });
  export const addedUser = (message) => ({
    type: ADDED_USER,
    payload: message,
  });

  export const putMessage = (messageFromServer) => ({
    type: PUT_MESSAGE,
    payload: messageFromServer,
  });
  export const putUsers = (usersFromServer) => ({
    type: PUT_USERS,
    payload: usersFromServer,
  });
  export const duplicateFound = (duplicate) => ({
    type: DUPLICATE_FOUND,
    payload: duplicate,
  });
  export const routingValue = (value) => ({
    type: ROUTING_VALUE,
    payload: value,
  });