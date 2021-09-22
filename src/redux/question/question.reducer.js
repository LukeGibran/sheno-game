import { QuestionActionTypes } from './question.types';

const INITIAL_STATE = {
  page: 1,
  perPage: 9,
  currentQuestionOpen: null,
  isQuestionModalOpen: false,
  allQuestions: [
    {
      question: 'question goes here',
      question_no: 1,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'available',
    },
    {
      question: 'question goes here',
      question_no: 2,
      correct_ans: 2,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 3,
      correct_ans: 2,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'correct',
    },
    {
      question: 'question goes here',
      question_no: 4,
      correct_ans: 2,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'wrong',
    },
    {
      question: 'question goes here',
      question_no: 5,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'available',
    },
    {
      question: 'question goes here',
      question_no: 6,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 7,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 8,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 9,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 10,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 11,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 12,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 13,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 14,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 15,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 16,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 17,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 18,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 19,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 20,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 21,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 22,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 23,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 24,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
    {
      question: 'question goes here',
      question_no: 25,
      correct_ans: 3,
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      status: 'unavailable',
    },
  ],
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
    default:
      return state;
  }
};

export default userReducer;
