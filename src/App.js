
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
      questionList : null,
      lifeLines : lifeLine,
      playerAlive : true,
      questionNumber : 0
    }

  }

componentDidMount() {
  let questionList = []
   fetch('https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple')
  .then(response => response.json())
  .then(data => 
    {
      for (let i = 0; i < data.results.length; i++) {
        let question = {
          questionText : data.results[i].question,
          possibleAnswers : data.results[i].incorrect_answers,
          answer : data.results[i].correct_answer
        }
        questionList.push(question);

      }

      console.log(questionList)
      this.setState(
        {
          questionList : questionList
        }
      )
    }

    )
  


}


askAudience = () => {
let currentAskAudience = this.state.lifeLines.askAudience - 1;
let currentFifty = this.state.lifeLines.fiftyFifty;

console.log('hi')

let currentLifeLines = {
  fiftyFifty : currentFifty,
  askAudience : currentAskAudience
}

this.setState(
  {
    lifeLines : currentLifeLines
  }
)

}


  fiftyFifty = () => {
 


    let currentFifty = this.state.lifeLines.fiftyFifty;
    let currentAudience = this.state.lifeLines.askAudience;
    currentFifty = currentFifty - 1;

    console.log(currentFifty)

    let currentLifeLines = {
      fiftyFifty : currentFifty,
      askAudience : currentAudience

    }

    this.setState({
      lifeLines : currentLifeLines }
    )


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
      let number = this.state.questionNumber + 1;

     this.setState({
       questionNumber : number
     })
    }
  }

  render() {

    console.log(this.state)
    if (this.state.questionList != null) {
console.log(this.state.questionList[0])
    }

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
        <LifeLines audienceHandler = {this.askAudience} fiftyHandler = {this.fiftyFifty} fiftyFifty = {this.state.lifeLines.fiftyFifty} askAudience = {this.state.lifeLines.askAudience} ></LifeLines>
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




