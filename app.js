var score, roundScore, activePlayer, gameIsPlaying, isHolding, player1, player2;
init();

function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameIsPlaying = true;
    isHolding = false;
    
    /*player1 = prompt('Enter 1st player name');
    player2 = prompt('Enter 2nd player name');

    document.querySelector('#name-0').textContent = player1;
    document.querySelector('#name-1').textContent = player2;*/
    
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gameIsPlaying) {
        var dice = Math.floor( Math.random() * 6 ) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice + '.png';

        if( dice !== 1){
            roundScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
            isHolding = true;

        }else{
            nextPlayer();
        }
    }

});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameIsPlaying){
        score[activePlayer] += roundScore;
        document.querySelector('#score-'+ activePlayer).textContent = score[activePlayer];

        if(score[activePlayer] >= 100){
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            gameIsPlaying = false;
        }else{ if(isHolding){
            nextPlayer();
        } }
    }

});

document.querySelector('.btn-new').addEventListener('click',init)

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    isHolding = false;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    
}
























