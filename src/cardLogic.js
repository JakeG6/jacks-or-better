export const suiteChecker = card => {
    switch(card.suite) {
        case "c":
            return '\u2663';
        case "s":
            return '\u2660';
        case "h":
            return '\u2665';
        case "d":
            return '\u2666';
        default: 
            return "okay"
    }
}

export const valueChecker = card => {
    switch(card.value) {
        case "K":
            return '\u265a';
        case "Q":
            return '\u265b';
        case "J":
            return '\u265f';
        case "A":
            return 'A';
        default: 
            return card.value;
    }
}

export const suiteColor = card => {
        if (card.suite === "c" || card.suite === "s") {
            return "black";
        }
        else {
            return "red";
        }
}