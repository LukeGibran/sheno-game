export const updateQuestionStatus = (allQuestions, questionNo, isCorrect) => {
  return allQuestions.map((question) => {
    if (question.question_no === questionNo) {

      question.status = isCorrect ? 'correct' : 'wrong';
      question.answered = true;

      return question;
    }
    // Set the next question to available
    if (question.question_no === (questionNo + 1)) {
        question.status = 'available'
        return question
    }

    return question;
  });
};
