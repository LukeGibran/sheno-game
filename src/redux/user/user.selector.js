import { createSelector } from "reselect";

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

export const isLoading = createSelector([userInfo], ({ loading }) => loading);

export const loadingMessage = createSelector(
  [userInfo],
  ({ loadingMessage }) => loadingMessage
);

export const currentStreak = createSelector([userInfo], ({ streak }) => streak);

export const currentFiveStreak = createSelector(
  [userInfo],
  ({ fiveStreak }) => fiveStreak
);

export const stageModal = createSelector(
  [userInfo],
  ({ stageModal }) => stageModal
);
