import React from 'react'
import AnswerButton from './answerButton'

export default function answers(props) {
    return (
        <div>
            {
                props.answers.answers.map((answer) => (
                    <AnswerButton checkAnswer = {props.checkAnswer } answerText = {answer} ></AnswerButton>
                ))

            }
        </div>
    )
}
