import React, { Component, Fragment } from 'react';

import App from '../components/Global/App';
import Button from '../components/UI/Button';
import { Container } from '../components/UI/Container';
import Questions from '../components/Questions';

import content from '../src/json/content.json';
import defaultAnswers from '../src/json/answers.json';

class Home extends Component {
  state = {
    answers: defaultAnswers,
    pageNumber: 1,
    pageType: 'question',
  }

  handleNext = () => {
    const { answers, pageNumber, pageType } = this.state;
    const getPageAnswers = answers.filter(x => x.page === pageNumber);
    const getNext = getPageAnswers.find(x => x.next);

    let newPageType = pageType;

    if (pageNumber === 7) {
      newPageType = 'final';
    }

    this.setState({
      pageNumber: getNext.next,
      pageType: newPageType,
    });
  }

  handleReset = () => {
    console.log('reset');
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

  handleResultsClick = () => {
    this.setState({ pageType: 'results' });
  }

  render() {
    const { pageNumber, pageType } = this.state;

    return (
      <App>
        <Container
          containerName="modal"
          containerWrapper="modal-header"
        >
          {pageType === 'question'
            ? (
              <Fragment>
                <p>{content.introCopy}</p>
                <Questions
                  handleChange={this.handleRadio}
                  handleNext={this.handleNext}
                  handleReset={this.handleReset}
                  pageNumber={pageNumber}
                />
              </Fragment>
            ) : '' }

          {pageType === 'final'
            ? (
              <Fragment>
                <p>{content.introCopy}</p>
                <Button
                  handleClick={this.handleResultsClick}
                  title={content.buttons.submitButton}
                />
              </Fragment>
            ) : '' }

          {pageType === 'results' ? <p>results here</p> : '' }
        </Container>
      </App>
    );
  }
}

export default Home;
