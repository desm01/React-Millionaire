import React from 'react'

const displayMoney = (number) => {

    switch (number + 1) {
        case 1: return 100 
        case 2: return 200
        case 3: return 300
        case 4: return 500
        case 5: return 1000
        case 6: return 2000
        case 7: return 4000
        case 8: return 8000
        case 9: return 16000
        case 10: return 32000
        case 11: return 64000
        case 12: return 125000
        case 13: return 250000
        case 14: return 500000
        case 15: return 1000000
        default: return 'Error';
    }

}

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
            <h1 style = {padding}>For: £{displayMoney(props.questionNumber)}</h1>
        </div>
    )
}
