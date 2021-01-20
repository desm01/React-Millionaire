import React from 'react'

export default function questionBox(props) {

    

    return (        
        <div>
            <h1>{props.question.questionText.replace(/&quot;/g,'"').replace(/&#039;/g,'"')}</h1>
        </div>
    )
}
