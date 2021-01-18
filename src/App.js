
import './App.css';
import React, { Component } from 'react';

import QuestionBox from './components/questionBox'
import Answers from './components/answers'
import LifeLines from './components/lifeLines'
import Board from './components/board'

class App extends Component {

  constructor(props) {
    super(props);

    let question = {
    questionText : 'What is the capital of the UK?',
    answers : ['Bristol', 'London', 'Manchester', 'Dublin'],
    answer : 'London'  
    }

    let lifeLine = {
      fiftyFifty : 2,
      askAudience : 1
    }

    this.state = {
      questions : question,
      lifeLines : lifeLine,
      playerAlive : true,
      questionNumber : 1
    }

  }

  checkAnswer = (answer) => {

    if (this.state.questions.answer !== answer) {
this.setState({
  playerAlive : false
}
)
    }

    else if (this.state.questions.answer === answer) {
     //  Correct
     console.log('correct')
    }
  }

  render() {

    if (this.state.questionNumber > 15) {
      return(

        <div className = "App">
          <h1>You have won the game!</h1>
        </div>

      )
    }

    if (this.state.playerAlive === true) {
    return (
      <div className="App">
        <LifeLines></LifeLines>
        <Board questionNumber = {this.state.questionNumber } ></Board>
        <QuestionBox question = {this.state.questions} ></QuestionBox>
        <Answers checkAnswer = { this.checkAnswer } answers = {this.state.questions} ></Answers>
      </div>
      );
    }
  

    else if (this.state.playerAlive === false) {
      return (
        <div className = "App">
          <h1>Game Over</h1>
          
          <h3>The correct answer was {this.state.questions.answer}</h3>
        </div>
        )
      }
    } 
}

export default App




