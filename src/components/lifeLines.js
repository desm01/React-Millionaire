import React from 'react'
import FiftyFifty from './fiftyFifty'
import AskAudience from './askAudience'

const style = {
    display : 'flex',
    justifyContent : 'center',
    padding : '20px'
}



export default function lifeLines(props) {

    if (props.fiftyFifty === 0 && props.askAudience  === 0) {
        return (
            <div>

            </div>
        )
    }

    if (props.fiftyFifty === 0 && props.askAudience === 1) {
        return (
            <div>
                <AskAudience askAudience = {props.audienceHandler}></AskAudience>
            </div>
        )
    }

    if (props.fiftyFifty === 1 && props.askAudience === 0) {
        return (
            <div>
                <FiftyFifty fiftyFifty = {props.fiftyHandler} ></FiftyFifty>
            </div>
        )
    }

    if (props.fiftyFifty === 1 && props.askAudience === 1) {
        return (
            <div style = {style}>
            <FiftyFifty fiftyFifty = {props.fiftyHandler} ></FiftyFifty>
            <AskAudience askAudience = {props.audienceHandler} ></AskAudience>
            </div>
        )
    }


    if (props.fiftyFifty === 2 && props.askAudience === 0) {

        return (
            <div style = {style}>
                <FiftyFifty fiftyFifty = {props.fiftyHandler} ></FiftyFifty>
                <FiftyFifty fiftyFifty = {props.fiftyHandler} ></FiftyFifty>
            </div>
        )
    
        }

    if (props.fiftyFifty === 2 && props.askAudience === 1) {

    return (
        <div style = {style}>
            <FiftyFifty fiftyFifty = {props.fiftyHandler} ></FiftyFifty>
            <FiftyFifty fiftyFifty = {props.fiftyHandler} ></FiftyFifty>
            <AskAudience askAudience = {props.audienceHandler} ></AskAudience>
        </div>
    )

    }
}
