import { UserActionTypes } from './user.types';

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
  type: UserActionTypes.RESET_USER_STATE
})

export const setLoading = (val) => ({
  type: UserActionTypes.SET_LOADING,
  payload: val,
})