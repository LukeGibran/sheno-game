import { QuestionActionTypes } from "./question.types";
import { updateQuestionStatus, shuffle } from "./question.utils";

import questions from "./questions";

const INITIAL_STATE = {
  page: 1,
  perPage: 5,
  currentQuestionOpen: 1,
  isQuestionModalOpen: false,
  isRationaleModalOpen: false,
  allQuestions: shuffle(JSON.parse(questions)),
  maxLevel: JSON.parse(questions).length,
  // maxLevel: 3,
  currentAnsPicked: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case QuestionActionTypes.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestionOpen: action.payload,
      };
    case QuestionActionTypes.TOGGLE_QUESTION_MODAL:
      return {
        ...state,
        isQuestionModalOpen: !state.isQuestionModalOpen,
      };
    case QuestionActionTypes.TOGGLE_RATIONALE_MODAL:
      return {
        ...state,
        isRationaleModalOpen: !state.isRationaleModalOpen,
      };
    case QuestionActionTypes.SET_IS_ANSWER_CORRECT:
      return {
        ...state,
        allQuestions: [
          ...updateQuestionStatus(
            state.allQuestions,
            state.currentQuestionOpen,
            action.payload
          ),
        ],
      };
    case QuestionActionTypes.RESET_QUESTION_STATE:
      return {
        ...state,
        page: 1,
        currentQuestionOpen: 1,
        isQuestionModalOpen: false,
        isRationaleModalOpen: false,
        allQuestions: shuffle(JSON.parse(questions)),
      };
    case QuestionActionTypes.SET_CURRENT_ANS_PICKED:
      return {
        ...state,
        currentAnsPicked: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
