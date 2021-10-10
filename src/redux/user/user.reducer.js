import { UserActionTypes } from './user.types';
const INITIAL_STATE = {
  currentUser: null,
  lives: 3,
  hasLostLife: false,
  hasGainLife: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.UPDATE_LIFE:
      return {
        ...state,
        lives: action.payload,
      };
    case UserActionTypes.SET_HAS_LOST_LIFE:
      return {
        ...state,
        hasLostLife: !state.hasLostLife,
      };
    case UserActionTypes.SET_HAS_GAIN_LIFE:
      return {
        ...state,
        hasGainLife: !state.hasGainLife,
      };
    case UserActionTypes.RESET_USER_STATE:
      return {
        ...state,
        lives: 3,
        hasLostLife: false,
        hasGainLife: false
      }
    default:
      return state;
  }
};

export default userReducer;
