import { userActionTypes } from './user.types';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
