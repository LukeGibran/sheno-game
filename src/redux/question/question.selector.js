import { createSelector } from 'reselect';

const getAllQuestions = (state) => state.question;

export const allQuestions = createSelector(
  [getAllQuestions],
  ({ allQuestions, page, perPage }) =>
    allQuestions.slice(perPage * (page - 1), perPage * page)
);

export const currentPage = createSelector(
  [getAllQuestions],
  (questions) => questions.page
);

export const maxPage = createSelector(
  [getAllQuestions],
  ({ allQuestions, perPage }) => Math.ceil(allQuestions.length / perPage)
);

export const isQuestionModalOpen = createSelector(
  [getAllQuestions],
  ({ isQuestionModalOpen }) => isQuestionModalOpen
);

export const currentQuestion = createSelector(
  [getAllQuestions],
  ({ currentQuestion, allQuestions }) => allQuestions[currentQuestion]
);

export const isRationaleModalOpen = createSelector(
  [getAllQuestions],
  ({ isRationaleModalOpen }) => isRationaleModalOpen
);
