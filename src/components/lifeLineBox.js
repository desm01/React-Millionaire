import React from 'react'
import FiftyFiftyButton from './fiftyFiftyButton'
import AskAudienceButton from './askAudienceButton'

const alignButtonsInARow = {
    display : 'flex',
    justifyContent : 'center',
    padding : '20px'
}

const displayAskAudienceButton = (props) => {
       return  <AskAudienceButton askAudience = {props.audienceHandler} /> 
}

const displayFiftyFiftyButtons = (props) => {
         return <FiftyFiftyButton fiftyFifty = {props.fiftyHandler} />   
}


export default function lifeLines(props) {

let jsx = []

for (let i = 0; i < props.askAudience; i++) {
    jsx.push (displayAskAudienceButton(props))
}

for (let i = 0; i < props.fiftyFifty; i++) {
    jsx.push( displayFiftyFiftyButtons(props))
}

    return(
        <div style = {alignButtonsInARow}>
            {jsx}
        </div>
    )
}
