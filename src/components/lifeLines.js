import React from 'react'
import FiftyFifty from './fiftyFifty'
import AskAudience from './askAudience'

const style = {
    display : 'flex',
    justifyContent : 'center'
}

export default function lifeLines() {
    return (
        <div style = {style}>
            <FiftyFifty></FiftyFifty>
            <FiftyFifty></FiftyFifty>
            <AskAudience></AskAudience>
        </div>
    )
}
