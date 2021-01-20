
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
    questionText : 'Loading',
    answers : ['', '', '', ''],
    answer : 'null'  
    }

    let lifeLine = {
      fiftyFifty : 2,
      askAudience : 1
    }

    this.state = {
      currentQuestion : question,
      questionList : null,
      lifeLines : lifeLine,
      playerAlive : true,
      questionNumber : 0
    }

  }

  shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }

  return array;
  }

componentDidMount() {
  let questionList = []
   fetch('https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple')
  .then(response => response.json())
  .then(data => 
    {
      for (let i = 0; i < data.results.length; i++) {
        let possibleAnswers = data.results[i].incorrect_answers;
        possibleAnswers.push(data.results[i].correct_answer)
        possibleAnswers = this.shuffle(possibleAnswers);

        let question = {
          questionText : data.results[i].question,
          answers : possibleAnswers,
          answer : data.results[i].correct_answer
        }
        questionList.push(question);

      }

      console.log(questionList)
      this.setState(
        {
          questionList : questionList,
          currentQuestion : questionList[0]
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

    if (this.state.currentQuestion.answer !== answer) {
    this.setState({
  playerAlive : false
      }
    )
  }

    else if (this.state.currentQuestion.answer === answer) {
     //  Correct
     console.log('correct')
      let number = this.state.questionNumber + 1;

      let nextQuest = this.state.questionList.pop();

     this.setState({
       questionNumber : number,
       currentQuestion : nextQuest
     })
    }
  }

  render() {

 

    if (this.state.questionNumber > 14) {
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
        <QuestionBox question = {this.state.currentQuestion} ></QuestionBox>
        <Answers checkAnswer = { this.checkAnswer } answers = {this.state.currentQuestion} ></Answers>
      </div>
      );
    }
  

    else if (this.state.playerAlive === false) {
      return (
        <div className = "App">
          <h1>Game Over</h1>
          
          <h3>The correct answer was {this.state.currentQuestion.answer}</h3>
        </div>
        )
      }
    } 
}

export default App




