import { createSelector } from 'reselect';

const userInfo = (state) => state.user;

export const getCurrentLife = createSelector([userInfo], ({ lives }) => lives);

export const hasLostLife = createSelector(
  [userInfo],
  ({ hasLostLife }) => hasLostLife
);

export const hasGainLife = createSelector(
  [userInfo],
  ({ hasGainLife }) => hasGainLife
);
