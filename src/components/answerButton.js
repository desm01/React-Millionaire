import React from 'react'

export default function answerButton(props) {
    let text = props.answerText;
        text.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        console.log(text);
    return (
        
        <div>
            <button  onClick = {() => props.checkAnswer(props.answerText)} >{text}</button>
        </div>
    )
}
