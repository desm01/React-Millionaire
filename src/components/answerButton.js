import React from 'react'

export default function answerButton(props) {
    let text = props.answerText;
        
    let decoded = text;

        if (text !== '') {
        var div = document.createElement('div');
        div.innerHTML = text
        decoded = div.firstChild.nodeValue;
        }

    

    let style = {
        color : '#80FFDB',
        backgroundColor : '#6930c3',
        fontSize : '12pt',
        padding : '10px',
        borderRadius : '10px',
        borderStyle : 'none'
    }

    return (
        
        <div>
            <button  style = {style} onClick = {() => props.checkAnswer(props.answerText)} >{decoded}</button>
        </div>
    )
}
