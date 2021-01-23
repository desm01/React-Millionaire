import React from 'react'
import  './question.css'

export default function questionBox(props) {


    let questionText = props.question.questionText;


    var div = document.createElement('div');
    div.innerHTML = questionText
    var decoded = div.firstChild.nodeValue;

    return (        
        <div className = "question">
            <h1>{decoded}</h1>
        </div>
    )
}
