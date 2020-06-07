/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Array to track scores

var scores, roundScore, activePlayer, dice;

var scores = [0,0];
var roundScore = 0;

// Current Player

var activePlayer = 1;


// Will choose a random number between 1 - 6

dice = Math.floor(Math.random() * 6) + 1;


// SETTING

document.querySelector('#current-' + activePlayer). textContent = dice;

// READING
var x = document.querySelector('#score-0').textContent; 
console.log(x);

// Query Selector used for SETTING and READING 

// . style . what style = changed STYLE

document.querySelector('.dice').style.display = 'none';

// Add event Listener () GETS ADDED TO EXECUTION STACK END in message queue (scroll event AND click event)



document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;
} );



