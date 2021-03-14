import React from 'react'
import AnswerButton from './answerButton'
import './question.css'

export default function answers(props) {
    return (
        <div className = "answers">
            {
                props.answers.answers.map((answer, index) => (
                    <AnswerButton key = {index} checkAnswer = {props.checkAnswer } answerText = {answer} ></AnswerButton>
                ))

            }
        </div>
    )
}
