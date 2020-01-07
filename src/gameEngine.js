const Hand = require('pokersolver').Hand;

export const createDeck = () => {
    const suites = ["h", "d", "c", "s"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let newDeck = [];
    for (let i = 0; i < suites.length; i++) {
        
        for (let j = 0; j < values.length; j++) {
            
            let card = {
                suite: suites[i],
                value: values[j],
                weight: null,
                isKept: false
            }

            switch(values[j]) {
                case "10":
                    card.weight = "T"
                    break;
                case "J":
                    card.weight = "J";
                    break;
                case "Q":
                    card.weight = "Q";
                    break;
                case "K":
                    card.weight = "K";
                    break;
                case "A": 
                    card.weight = "A";
                    break;
                default:
                    card.weight = parseInt(values[j]);
            }
            newDeck.push(card);
        }
    }
    return newDeck;
}

export const deal = (deck, count, hand) => {
    let dealtCards = [];
    for (let i = 0; i < count; i++) {
        let card = deck.pop();
        dealtCards.push(card);
    }
    return { deck: deck, hand: dealtCards };
}


export const shuffleShuffle = deck => {
    for (let i = 0; i < 500; i++) {
        let card1 = Math.floor(Math.random() * deck.length);
        let card2 = Math.floor(Math.random() * deck.length);

        let placeHolder = deck[card2];
        deck[card2] = deck[card1];
        deck[card1] = placeHolder;

    }
    return deck
}

export const calculateHand = (playerHand, bet) => {

    const scoreTable = {
        "Royal Flush": [250, 500, 750, 1000, 4000],
        "Straight Flush": [50, 100, 150, 200, 250],
        "Four of a Kind": [25, 50, 75, 100, 125],
        "Full House": [9, 18, 27, 36, 45],
        "Flush": [6, 12, 18, 24, 30],
        "Straight": [4, 8, 12, 16, 20],
        "Three of a Kind": [3, 6, 9, 12, 15],
        "Two Pair": [2, 4, 6, 8, 10],
        "Pair": [1, 2, 3, 4, 5],
    }
   
    const hand = Hand.solve(playerHand.map(card  => { return card.weight + card.suite; }), "jacksbetter", true);
    let winners = Hand.winners([hand]);

    //check if hand is at least jacks or better
    if (winners.length > 0) {
        return scoreTable[hand.name][bet - 1]
    
    }
    else {
        return 0
    }

}