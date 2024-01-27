export const SET_USER = "SET_USER";

const initialState = {
  user: null,
};

export function userReducer(state = initialState, action) {
  var newState = state;

  switch (action.type) {
    case SET_USER:
      newState = { ...state, user: action.payload };
      break;
    default:
      return newState;
  }
  return newState;
}




