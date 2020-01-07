import React from 'react';
import { suiteChecker, suiteColor, valueChecker } from '../../cardLogic.js';

  // Player's hand UI
const HandDisplay = props => {

    if (props.hand !== undefined) {
        return (
            <div className="handDisplay">
                {props.hand.map((card, index) => 
                    <div 
                    key={ index } 
                    index={ index }
                    className={ `card ${card.isKept ? "isKept" : ""}` }
                    onClick={() => props.toggleKeptCard(index)}
                    >
                    <div className={ `cardSymbol ${suiteColor(card)} cardValue`}>{valueChecker(card) }</div>
                    <div className={ `cardSymbol ${suiteColor(card)} cardSuite`}>{suiteChecker(card) }</div>
                    { card.isKept ? <h2 className="keepIndicator">KEEP</h2> : <div></div> }        
                    </div>
                )}
            </div>
        )
    }
    else {
        return (<div className="handDisplay"></div>)
    }
}

export default HandDisplay