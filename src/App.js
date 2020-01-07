import React, {useState} from 'react';
import { createDeck , shuffleShuffle, deal, calculateHand } from "./gameEngine";
import ScoringTable from "./components/ScoringTable/ScoringTable.js";
import HandDisplay from "./components/HandDisplay/HandDisplay.js";
import AddCredits from "./components/AddCredits/AddCredits.js";

import './App.css';
import './buttons.css';
import './fonts.css';

function App() {

  const [gameState, setGameState] = useState(
      {hand:[], keptCards: [], credits: 0, bet: 1, deck: [], discardPile: [], handDealt: false}
  );
  
  //maximum bet player can make
  const maxBet = 5;

  //Credits added by function
  const creditsAdded = 5;

  const increaseCredits = (creditsAdded) => {
    setGameState({...gameState, credits: gameState.credits + creditsAdded})
  }

  const startGame = (e) => {
    //shuffle up a new deck
    let freshDeck = shuffleShuffle(createDeck());
    //deal five cards to the player
    let freshDeal = deal(freshDeck, 5, gameState.hand)
    setGameState({...gameState, ...freshDeal, credits: gameState.credits - gameState.bet, handDealt: true});
  }

  const toggleKeptCard = index => {
    let newHand = [...gameState.hand];

    //change kept condition
    newHand[index].isKept = !newHand[index].isKept;
  
    setGameState({ ...gameState, hand: newHand });
  } 

  const replaceCards = () => {
    let newHand = [...gameState.hand];
    let newDeck = [...gameState.deck];
    //replace all cards not kept
    for (let i = 0; i < newHand.length; i++) {
      if (newHand[i].isKept !== true) {
        let index = i;
        let newCard = newDeck.pop()
        newHand.splice(index, 1, newCard);
      }
      else {newHand[i].isKept = false;}
    }
    //determine payout of hand type
    const payout = calculateHand(newHand, gameState.bet);
    setGameState({...gameState, hand: newHand, bet: 1, deck: newDeck, credits: gameState.credits + payout, handDealt: false })
  }

  const changeBet = (operator) => {
    
    if (operator === "+") {
      setGameState({...gameState, bet: gameState.bet + 1 })
    }
    else if (operator === "-") {
      setGameState({...gameState, bet: gameState.bet - 1 })
    }
    else if (operator === "max") {
      let newMax;
      if (maxBet <= gameState.credits) {
        newMax = maxBet;
      }
      else if (gameState.credits <= 0) {
        newMax = 1;
      }
      else {
        newMax = gameState.credits;
      }
      setGameState({...gameState, bet: newMax });
    }
    else {
      return;
    }
  }

  return (
    <div className="App">
      <h1>JACKS OR BETTER</h1>
      <ScoringTable />     
      <HandDisplay hand={gameState.hand} toggleKeptCard={toggleKeptCard} />
      <div id="bottomRow">
        <AddCredits increaseCredits={increaseCredits} creditsAdded={creditsAdded} />
        <div id="betOptions">
          <button type="button" className="betButton" disabled={ gameState.bet > 1 ? false : true } onClick={() => changeBet("-")}>-</button> 
          <div>
            <h3 className="betLogo">BET</h3>
            <div className="betValue" >{ `${gameState.bet}` }</div>
          </div>
          <button type="button" className="betButton" disabled={ (gameState.bet < 5 && gameState.bet < gameState.credits) ? false : true } onClick={() => changeBet("+")}>+</button>
        </div>
        <button type="button" className="maxButton" onClick={ () => changeBet("max") }>MAX BET</button> 
        <div>
          <h3 className="creditsCount">{ `CREDITS: ${gameState.credits}` }</h3>
          { gameState.handDealt ? 
            <button type="button" onClick={ replaceCards }>REPLACE CARDS</button> 
            : 
            <button type="button" id="dealButton" disabled={ gameState.credits <= 0 ? true : false } onClick={startGame}>DEAL HAND</button> 
          }  
        </div>
      </div>
    </div>
  );
}

export default App;