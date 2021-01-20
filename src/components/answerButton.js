import React from 'react'

export default function answerButton(props) {
    let text = props.answerText;
        text.replace(/&quot;/g,'"')
    return (
        
        <div>
            <button  onClick = {() => props.checkAnswer(props.answerText)} >{text}</button>
        </div>
    )
}
