import PropTypes from 'prop-types';
import React from 'react';

import Button from '../UI/Button';

import content from '../../src/json/content.json';
import questions from '../../src/json/questions.json';

const questionsPropTypes = {
  handleChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

const answerPropTypes = {
  answer: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  handleChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  qid: PropTypes.number.isRequired,
};

const questionPropTypes = {
  handleChange: PropTypes.func.isRequired,
  question: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const Questions = (props) => {
  const {
    handleChange,
    handleNext,
    handleReset,
    pageNumber,
  } = props;
  const currentQuestions = questions.filter(x => x.page === pageNumber);

  return (
    <div>
      {currentQuestions.map((question, index) => (
        <Question key={index.toString()} handleChange={handleChange} question={question} />
      ))}

      <Button handleClick={handleNext} title={content.buttons.next} />
      <Button handleClick={handleReset} title={content.buttons.reset} />
    </div>
  );
};

const Question = (props) => {
  const { handleChange, question } = props;

  return (
    <div>
      <p>{question.title}</p>
      {question.answers.map((answer, index) => (
        <Answers
          answer={answer}
          handleChange={handleChange}
          key={index.toString()}
          index={index}
          qid={question.id}
        />
      ))}
    </div>
  );
};

const Answers = (props) => {
  const {
    answer,
    handleChange,
    index,
    qid,
  } = props;

  return (
    <div>
      <label htmlFor={`${answer.value}-${qid}`}>
        <input
          id={`${answer.value}-${qid}`}
          name={`q-${qid}`}
          type="radio"
          value={answer.value}
          onChange={() => handleChange(answer, `q-${qid}`)}
        />
        {answer.title}
      </label>
    </div>
  );
};

Questions.propTypes = questionsPropTypes;
Answers.propTypes = answerPropTypes;
Question.propTypes = questionPropTypes;

export default Questions;
