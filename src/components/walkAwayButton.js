import React from 'react'

export default function walkAway(props) {

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
            <button style = {style} onClick = {() => props.walkAway()}>Walk Away</button>
        </div>
    )
}
