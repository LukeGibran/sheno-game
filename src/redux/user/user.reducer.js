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
  welcomeModal: true,
  musicEffect: false,
  musicNum: 0,
  soundEffect: false,
  soundNum: 0,
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
    case UserActionTypes.TOGGLE_WELCOME_MODAL:
      return {
        ...state,
        welcomeModal: !state.welcomeModal,
      };
    case UserActionTypes.TOGGLE_MUSIC_EFFECT:
      return {
        ...state,
        musicEffect: action.payload,
      };
    case UserActionTypes.SET_MUSIC_NUM:
      return {
        ...state,
        musicNum: action.payload,
      };
    case UserActionTypes.TOGGLE_SOUND_EFFECT:
      return {
        ...state,
        soundEffect: action.payload,
      };
    case UserActionTypes.SET_SOUND_NUM:
      return {
        ...state,
        soundNum: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
