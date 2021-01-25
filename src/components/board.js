import React from 'react'



export default function board(props) {

    let style = {
    fontSize : '12pt',
    display : 'flex',
    justifyContent : 'space-evenly',
    }

    let padding = {
        padding : '10px',
        display : 'dashed'
    }

    return (
        <div style = {style}>
            <h1 stlye = {padding}>Question: {props.questionNumber + 1}</h1>
            <h1 style = {padding}>For: £{props.displayMoney(props.questionNumber)}</h1>
        </div>
    )
}
