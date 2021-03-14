
import './App.css';
import React, { Component } from 'react';

import QuestionBox from './components/questionBox'
import Answers from './components/answerBox'
import LifeLines from './components/lifeLineBox'
import Board from './components/boardCounter'
import WalkAway from './components/walkAwayButton'

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
      walkAway : false,
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

getQuestions = async (difficulty) => {
  let questionList = []
  await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty='+ difficulty +'&type=multiple')
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

     if (this.state.currentQuestion.questionText === 'Loading') {
      this.setState(
        {
          questionList : questionList,
          currentQuestion : questionList[0]
        }
      )
     }

     else {
       let currentQuestions = this.state.questionList;
       let q = currentQuestions.concat(questionList);

      this.setState(
        {
          questionList : q
        }
      )
     }

   })
}



async componentDidMount() {

    await this.getQuestions('easy');
    await this.getQuestions('medium');
    await this.getQuestions('hard');
  
}


askAudience = () => {
let currentAskAudience = this.state.lifeLines.askAudience - 1;
let currentFifty = this.state.lifeLines.fiftyFifty;

let num = Math.floor((Math.random() * 10) + 1);

if (num > 1) {
  //Corrrect Answer
  let chance = Math.floor(Math.random() * (99 - 60 + 1) ) + 60;
  alert(chance + "% of the audience think that the answer is: " + this.state.currentQuestion.answer)

}

else if ( num === 0  ) {
  // Wrong Answer 
  let chance = Math.floor(Math.random() * (40 - 30 + 1) ) + 30;
  let randomAns = Math.floor((Math.random() * 3) + 0);
  alert(chance + "% of the audience think that the answer is: " + this.state.currentQuestion.answers[randomAns])
}


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

removeTwoAnswers = (answers) => {
let counter = 0;

  for (let i = 0; i < answers.length; i++) {
      if (answers[i] === '') {
        counter++;
      }

      if (counter >= 2) {
        return;
      }
    
  }

  let num = Math.floor((Math.random() * 3) + 0);

  if (answers[num] !== this.state.currentQuestion.answer) {
    answers[num] = '';
  }



  return this.removeTwoAnswers(answers);

}

  fiftyFifty = () => {
 


    let currentFifty = this.state.lifeLines.fiftyFifty;
    let currentAudience = this.state.lifeLines.askAudience;
    currentFifty = currentFifty - 1;

    let currentAnswers = this.removeTwoAnswers(this.state.currentQuestion.answers)



    console.log(currentFifty)

    let currentLifeLines = {
      fiftyFifty : currentFifty,
      askAudience : currentAudience

    }

    this.setState({
      answers : currentAnswers,
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

walkAway = () => {
  console.log('walk away')
  this.setState({
    walkAway : true
  })
}

refresh = () => {
  window.location.reload(false);
}

displayMoney = (number) => {

  switch (number + 1) {
      case 1: return 100 
      case 2: return 200
      case 3: return 300
      case 4: return 500
      case 5: return 1000
      case 6: return 2000
      case 7: return 4000
      case 8: return 8000
      case 9: return 16000
      case 10: return 32000
      case 11: return 64000
      case 12: return 125000
      case 13: return 250000
      case 14: return 500000
      case 15: return 1000000
      default: return 'Error';
  }

}

  render() {


    if ( this.state.currentQuestion.answer !== '' ) {
      console.log(this.state.currentQuestion.answer)
    }
 

    if (this.state.questionNumber > 14) {
      return(

        <div className = "App">
          <h1>You have won the game!</h1>
        </div>

      )
    }

    if (this.state.walkAway === true) {
      return (
        <div className = "App">
          <h1>You have walked away with: £{this.displayMoney(this.state.questionNumber)}</h1>
        </div>
      )
    }

    if (this.state.playerAlive === true) {
    return (
      <div className="App">
        <WalkAway walkAway = {this.walkAway} ></WalkAway>
        <LifeLines audienceHandler = {this.askAudience} fiftyHandler = {this.fiftyFifty} fiftyFifty = {this.state.lifeLines.fiftyFifty} askAudience = {this.state.lifeLines.askAudience} ></LifeLines>
        <Board displayMoney = {this.displayMoney} questionNumber = {this.state.questionNumber } ></Board>
        <QuestionBox question = {this.state.currentQuestion} ></QuestionBox>
        <Answers checkAnswer = { this.checkAnswer } answers = {this.state.currentQuestion} ></Answers>
      </div>
      );
    }
  

    else if (this.state.playerAlive === false) {

      let text = this.state.currentQuestion.answer;

      var div = document.createElement('div');
      div.innerHTML = text
      text = div.firstChild.nodeValue;

      let buttonStyle = {
        color : '#80FFDB',
        backgroundColor : '#6930c3',
        fontSize : '12pt',
        padding : '10px',
        borderRadius : '10px',
        borderStyle : 'none'
    }

      return (
        <div className = "App">
          <h1>Game Over</h1>
          <h1>The correct answer was {text}</h1>
          <button style = {buttonStyle}  onClick = {() => this.refresh()}>Play Again</button>
        </div>
        )
      }
    } 
}

export default App




