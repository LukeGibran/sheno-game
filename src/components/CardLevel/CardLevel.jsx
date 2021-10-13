import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux Actions
import {
  toggleQuestionModal,
  setCurrentQuestion,
} from '../../redux/question/question.actions';

// Redux Selectors
import { paginatedQuestions } from '../../redux/question/question.selector';

import { Wrap, Box, ScaleFade } from '@chakra-ui/react';

import CardLevelItem from './CardLevelItem';

const CardLevel = ({ questions, toggleQModal, setCurrQ }) => {
  useEffect(() => {
    console.log(questions);
  }, []);

  const setTheQuestion = (index) => {
    toggleQModal()
    setCurrQ(index)
  };
  return (
    <Box
      px={{ base: 1, lg: 10 }}
      py={{ base: 0, lg: 5 }}
      overflow='hidden'
      justify='center'
      w={{ base: '100%', md: '80%', lg: '70%' }}
      h={{ base: 225, md: 'auto', lg: 'auto', xl: 'auto' }}
    >
      <Wrap py={3} spacing={{ base: 5, lg: 10 }} justify='center'>
        {questions.map((question, i) => (
          <ScaleFade
            initialScale={0.9}
            in={true}
            key={question.question_no}
            delay={i / 25}
          >
            <CardLevelItem q_no={question.question_no} type={question.status}  setTheQuestion={setTheQuestion} />
          </ScaleFade>
        ))}
      </Wrap>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: paginatedQuestions,
});

const mapDispatchToProps = (dispatch) => ({
  toggleQModal: () => dispatch(toggleQuestionModal()),
  setCurrQ: (no) => dispatch(setCurrentQuestion(no)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardLevel);
