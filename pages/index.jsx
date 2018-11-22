import React, { Component } from 'react';
import update from 'immutability-helper';

import App from '../components/Global/App';
import { Container } from '../components/Ui/Container';
import Questions from '../components/Questions';

import defaultAnswers from '../src/json/answers.json';

class Home extends Component {
  state = {
    answers: defaultAnswers,
    pageNumber: 1,
    pageType: 'question',
  }

  handleNext = () => {
    const { answers, pageNumber } = this.state;
    const getPageAnswers = answers.filter(x => x.page === pageNumber);
    const getNext = getPageAnswers.find(x => x.next);

    this.setState({
      pageNumber: getNext.next,
    });
  }

  handleRadio = (answer, qid) => {
    const { answers, pageNumber } = this.state;
    const updateItem = answers.find(x => x.name === qid);
    const index = answers.indexOf(updateItem);
    const newAnswers = answers;

    newAnswers[index] = {
      value: answer.value,
      name: qid,
      page: pageNumber,
      next: answer.next,
      cat: answer.category,
    };

    this.setState({
      answers: newAnswers,
    });
  }

  render() {
    const { pageNumber, pageType } = this.state;

    return (
      <App>
        <Container
          containerName="modal"
          containerWrapper="modal-header"
        >
          {pageType === 'question' ? <Questions pageNumber={pageNumber} handleChange={this.handleRadio} handleClick={this.handleNext} /> : '' }
          {/* {pageType === 'final' ? <Questions /> : '' }
          {pageType === 'results' ? <Questions /> : '' } */}
        </Container>
      </App>
    );
  }
}

export default Home;
