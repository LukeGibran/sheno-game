import { QuestionActionTypes } from "./question.types";

export const setCurrentPage = (page) => ({
  type: QuestionActionTypes.SET_CURRENT_PAGE,
  payload: page,
});

export const setCurrentQuestion = (val) => ({
  type: QuestionActionTypes.SET_CURRENT_QUESTION,
  payload: val,
});

export const toggleQuestionModal = () => ({
  type: QuestionActionTypes.TOGGLE_QUESTION_MODAL,
});

export const toggleRationaleModal = () => ({
  type: QuestionActionTypes.TOGGLE_RATIONALE_MODAL,
});

export const isAnswerCorrect = (val) => ({
  type: QuestionActionTypes.SET_IS_ANSWER_CORRECT,
  payload: val,
});

export const resetQuestionState = () => ({
  type: QuestionActionTypes.RESET_QUESTION_STATE,
});

export const setCurrAnsPicked = (val) => ({
  type: QuestionActionTypes.SET_CURRENT_ANS_PICKED,
  payload: val,
});
