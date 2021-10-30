export const updateQuestionStatus = (allQuestions, questionNo, isCorrect) => {
  return allQuestions.map((question) => {
    if (question.question_no === questionNo) {
      question.status = isCorrect ? "correct" : "wrong";
      question.answered = true;

      return question;
    }
    // Set the next question to available
    if (question.question_no === questionNo + 1) {
      question.status = "available";
      return question;
    }

    return question;
  });
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];

    array[currentIndex].question_no = currentIndex + 1
  }

  array[0].status = 'available'

  return array;
};
