import React, { Component, Fragment } from 'react';

import App from '../components/Global/App';
import Button from '../components/UI/Button';
import { Container } from '../components/UI/Container';
import Questions from '../components/Questions';
import PlaylistGen from '../components/PlaylistGen';

import content from '../src/json/content.json';
import defaultAnswers from '../src/json/answers.json';

class Home extends Component {
  state = {
    answers: defaultAnswers,
    pageNumber: 1,
    pageType: 'question',
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

  handleNext = () => {
    const { answers, pageNumber, pageType } = this.state;
    const getPageAnswers = answers.filter(x => x.page === pageNumber);
    const getNext = getPageAnswers.find(x => x.next);

    let newPageType = pageType;

    if (pageNumber === 7) {
      newPageType = 'submit';
    }

    this.setState({
      // answers: this.newAnswers,
      pageNumber: getNext.next,
      pageType: newPageType,
    });
  }

  handlePageType = (newPageType) => {
    this.setState({ pageType: newPageType });
  }

  handlePlay = () => {
    console.log('play');
  }

  handleReset = () => {
    this.setState({
      pageNumber: 1,
      pageType: 'question',
    });
  }

  render() {
    const { answers, pageNumber, pageType } = this.state;

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

          {pageType === 'submit'
            ? (
              <Fragment>
                <p>{content.introCopy}</p>
                <Button
                  handleClick={() => this.handlePageType('results')}
                  title={content.buttons.submitButton}
                />
              </Fragment>
            ) : '' }

          {pageType === 'results'
            ? (
              <Fragment>
                <p>{content.soundtrackCopy}</p>
                <Button
                  handleClick={() => this.handlePageType('save')}
                  title={content.buttons.save}
                />
                <Button
                  handleClick={this.handleReset}
                  title={content.buttons.startOver}
                />
                <PlaylistGen answers={answers} />
              </Fragment>
            ) : '' }

          {pageType === 'save'
            ? (
              <Fragment>
                <Button title={content.buttons.listen} handleClick={this.handlePlay} />
                <Button title={content.buttons.startAgain} handleClick={this.handleReset} />
              </Fragment>
            ) : '' }
        </Container>
      </App>
    );
  }
}

export default Home;
