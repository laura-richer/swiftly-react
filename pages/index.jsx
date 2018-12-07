import React, { Component, Fragment } from 'react';
import window from 'global';
import ls from 'local-storage';
import SpotifyWebApi from 'spotify-web-api-js';

import App from '../components/Global/App';
import Button from '../components/UI/Button';
import { Container } from '../components/UI/Container';
import Questions from '../components/Questions';
import PlaylistGen from '../components/PlaylistGen';

import content from '../src/json/content.json';
import defaultAnswers from '../src/json/answers.json';

import {
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  SCOPE,
} from '../config/constants';

if (ls.get('accessToken')) {
  window.onbeforeunload = () => {
    localStorage.clear();
    return '';
  };
}

class Home extends Component {
  state = {
    answers: defaultAnswers,
    pageNumber: 1,
    pageType: '',
  }

  componentDidMount = () => {
    console.log(ls.get('accessToken'));

    if (!ls.get('accessToken')) {
      this.setState({
        pageType: 'login',
      });
    } else {
      const spotifyApi = new SpotifyWebApi();

      this.setState({
        pageType: 'question',
      });
    }
  };

  handleLogin = async () => {
    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}&scope=${SCOPE}&response_type=code`;
    window.location.href = url;
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

    // this.setState({
    //   answers: newAnswers,
    // });
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

  handlePageType = (newPageType, oldPageType) => {
    this.setState({ pageType: newPageType });
    console.log(oldPageType);
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
          {pageType === 'login'
            ? (
              <Fragment>
                <button type="button" onClick={this.handleLogin}>Log in</button>
              </Fragment>
            ) : '' }

          {pageType === 'question'
            ? (
              <Fragment>
                <p>{content.copy.questions}</p>
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
                <p>{content.copy.questions}</p>
                <Button
                  handleClick={() => this.handlePageType('playlist', pageType)}
                  title={content.buttons.submitButton}
                />
              </Fragment>
            ) : '' }

          {pageType === 'playlist'
            ? (
              <Fragment>
                <p>{content.copy.playlist}</p>
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
                <h2>{content.copy.save}</h2>
                <Button title={content.buttons.listen} handleClick={this.handlePlay} />
                <Button title={content.buttons.startAgain} handleClick={this.handleReset} />
                <p>{content.copy.share}</p>
              </Fragment>
            ) : '' }
        </Container>
      </App>
    );
  }
}

export default Home;
