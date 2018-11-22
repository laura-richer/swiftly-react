import React, { Component } from 'react';

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
    // go to next

    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  }

  handleRadio = (answer, qid) => {
    // console.log(answer);
    // console.log(qid);

    const { answers } = this.state;

    // setState here to update answer for each question id

    let updateItem = answers.find(x => x.name === qid);
    let index = answers.indexOf(updateItem);

    console.log(updateItem);
    console.log(index);

    this.setState({
      answers[index]: updateItem,
    });
    // this.answers[index] = {"value": answer.value, "name": "q-" + id, "page": page, "next": answer.next, "cat": answer.cat};
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
