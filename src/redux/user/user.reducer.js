import { UserActionTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false,
  lives: 3,
  hasLostLife: false,
  hasGainLife: false,
  loading: false,
  loadingMessage: "",
  streak: 0,
  fiveStreak: 0,
  stageModal: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
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
        hasGainLife: false,
      };
    case UserActionTypes.SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
        loadingMessage: action.payload,
      };
    case UserActionTypes.SET_FIVE_STREAK:
      return {
        ...state,
        fiveStreak: action.payload,
      };
    case UserActionTypes.SET_STREAK:
      return {
        ...state,
        streak: action.payload,
      };
    case UserActionTypes.TOGGLE_STAGE_MODAL:
      return {
        ...state,
        stageModal: !state.stageModal,
      };
    default:
      return state;
  }
};

export default userReducer;
