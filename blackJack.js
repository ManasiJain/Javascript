//
// Black Jack
// By : Manasi Jain
//


// Card variables
let suits = ['Hearts','Clubs','Diamonds','Spades'],
    values = ['Ace', 'King','Queen','Jack',
                    'Ten', 'Nine', 'Eight', 'Seven',
                    'Six', 'Five', 'Four', 'Three',
                    'Two'];


// DOM variables 
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];



hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

hitButton.addEventListener('click', function(){
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function(){
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});

function createDeck(){
   let deck = [];
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
        for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
            let card = {
                suit: suits[suitIndex],
                value: values[valueIndex]
            };
            deck.push(card)
        }
    }
    return deck;
}

function shuffleDeck(deck){
    for (let index = 0; index < deck.length; index++) {
        let swapIndex = Math.trunc(Math.random() * deck.length);
        let temp = deck[swapIndex];
        deck[swapIndex] = deck[index];
        deck[index] = temp;
    }
}

function getCardNumericValue(card){
    let value = 0;
    switch(card.value){
        case 'Ace'      : value= 1;
                        break;
        case 'Two'      : value= 2;
                        break;
        case 'Three'    : value = 3;
                        break;
        case 'Four'     : value = 4;
                        break;
        case 'Five'     : value = 5;
                        break;
        case 'Six'      : value = 6;
                        break;
        case 'Seven'    : value = 7;
                        break;
        case 'Eight'    : value = 8;
                        break;
        case 'Nine'     : value = 9;
                        break;
        default         : value = 10;
                        break;
    }
    return value;
}

function getScore(cardArray){
    let score = 0;
    let hasAce = false;
    for (let index = 0; index < cardArray.length; index++) {
        let card = cardArray[index];
        score += getCardNumericValue(card);
        if(card.value === 'Ace')
            hasAce = true;
        
        if(hasAce && score + 10 <= 21)
            return score + 10;
    }
    return score;
}

function updateScores(){
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function getCardString(card){
    return card.value + ' of ' + card.suit; 
}

function getNextCard(){
    return deck.shift();
}


function checkForEndOfGame(){
    debugger;
    updateScores();

    if (playerScore === 21) {
        gameOver = true;
        playerWon = true
        return;
    }

    if (gameOver) {
        // let dealer take cards
        while(dealerScore<playerScore
            && playerScore <= 21
            && dealerScore <= 21){
                dealerCards.push(getNextCard());
                updateScores();
            }
    }

    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
    }
    else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    }
    else if (gameOver) {
        if (playerScore > dealerScore)
            playerWon = true;
        else
            playerWon = false;
    }
}


function showStatus(){
    if(!gameStarted){
        textArea.innerText = 'Welcome to Blckjack!';
        return;
    }

    /* Display shuffled cards
    for (let index = 0; index < deck.length; index++) {
        textArea.innerText += '\n' + getCardString(deck[index]);
    }*/

    let dealerCardString = '';
    for (let index = 0; index < dealerCards.length; index++) {
        dealerCardString += getCardString(dealerCards[index]) + '\n';
    }

    let playerCardString = '';
    for (let index = 0; index < playerCards.length; index++) {
        playerCardString += getCardString(playerCards[index]) + '\n';
    }

    updateScores();

    textArea.innerText = 
        'Dealer has: \n' +
        dealerCardString +
        '(score: ' + dealerScore + ')\n\n' +

        'Player has: \n' +
        playerCardString +
        '(score: ' + playerScore + ')\n\n';

    if(gameOver){
        if(playerWon)
            textArea.innerText +=  "Player Won!";
        else
            textArea.innerText += "Dealer Won!";
        
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
}