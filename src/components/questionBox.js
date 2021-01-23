import React from 'react'

export default function questionBox(props) {

    let questionText = props.question.questionText;
    questionText.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

    return (        
        <div>
            <h1>{questionText}</h1>
        </div>
    )
}
