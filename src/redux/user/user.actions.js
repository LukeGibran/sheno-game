import { UserActionTypes } from "./user.types";

export const setCurrentUser = (val) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: val,
});

export const updateLife = (val) => ({
  type: UserActionTypes.UPDATE_LIFE,
  payload: val,
});

export const setLostLife = () => ({
  type: UserActionTypes.SET_HAS_LOST_LIFE,
});

export const setGainLife = () => ({
  type: UserActionTypes.SET_HAS_GAIN_LIFE,
});

export const resetUserState = () => ({
  type: UserActionTypes.RESET_USER_STATE,
});

export const setLoading = (val) => ({
  type: UserActionTypes.SET_LOADING,
  payload: val,
});

export const setStreak = (val) => ({
  type: UserActionTypes.SET_STREAK,
  payload: val,
});

export const setFiveStreak = (val) => ({
  type: UserActionTypes.SET_FIVE_STREAK,
  payload: val,
});

export const toggleStageModal = () => ({
  type: UserActionTypes.TOGGLE_STAGE_MODAL,
});

export const toggeWelcomeModal = () => ({
  type: UserActionTypes.TOGGLE_WELCOME_MODAL,
});


export const toggleMusicEffect = (val) => ({
  type: UserActionTypes.TOGGLE_MUSIC_EFFECT,
  payload: val
})

export const setMusicNum = (val) => ({
  type: UserActionTypes.SET_MUSIC_NUM,
  payload: val
})

export const toggleSoundEffect = (val) => ({
  type: UserActionTypes.TOGGLE_SOUND_EFFECT,
  payload: val
})

export const setSoundNum = (val) => ({
  type: UserActionTypes.SET_SOUND_NUM,
  payload: val
})