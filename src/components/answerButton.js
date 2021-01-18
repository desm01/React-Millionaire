import React from 'react'

export default function answerButton(props) {
    return (
        <div>
            <button  onClick = {() => props.checkAnswer(props.answerText)} >{props.answerText}</button>
        </div>
    )
}
