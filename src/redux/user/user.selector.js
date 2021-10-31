import { createSelector } from "reselect";

const userInfo = (state) => state.user;

export const getCurrentUser = createSelector(
  [userInfo],
  ({ currentUser }) => currentUser
);

export const isLoggedIn = createSelector(
  [userInfo],
  ({ isLoggedIn }) => isLoggedIn
);

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

export const welcomeModal = createSelector(
  [userInfo],
  ({ welcomeModal }) => welcomeModal
);

export const soundEffect = createSelector(
  [userInfo],
  ({ soundEffect }) => soundEffect
);

export const soundNum = createSelector([userInfo], ({ soundNum }) => soundNum);

export const musicEffect = createSelector(
  [userInfo],
  ({ musicEffect }) => musicEffect
);

export const musicNum = createSelector([userInfo], ({ musicNum }) => musicNum);
