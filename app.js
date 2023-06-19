var isItOver = false;

var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

document.getElementById('score-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0; 

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none"; 


function newGame() {
    activePlayer = 0;
    
    scores = [0, 0];
    scores[0] = 0; 
    scores[1] = 0; 

    roundScore = 0;

    document.getElementById('score-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0; 
    activePlayer === 0 ? ( activePlayer = 1 ) : ( activePlayer = 0 );
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
      

    diceDom.style.display = "none"; 
}

if ( isItOver ) {
    newGame();
    activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    document.querySelector(".btn-new").addEventListener("click", function(){
        newGame(); 
        document.querySelector('.player-0-panel').classList.toggle("active");
        activePlayer === 0 ? ( activePlayer = 1 ) : ( activePlayer = 0 );
        document.querySelector(".player-"+ 0 + "-panel" ).classList.remove('winner');
        document.querySelector(".player-"+ 1 + "-panel" ).classList.remove('winner');
        document.getElementById("name-" + 0).textContent = 'player ' +  1;
        document.getElementById("name-" + 1).textContent = 'player ' +  2;


        document.querySelector('.player-0-panel').classList.add("active");
        document.querySelector('.player-1-panel').classList.remove("active");
    })
    isItOver = false;
} else {
        

    document.querySelector(".btn-roll").addEventListener("click", function(){
        diceNumber = Math.floor( Math.random() * 6 ) + 1;
        diceDom.style.display = "block";
        diceDom.src = "dice-" + diceNumber + ".png";
        
        //toglogchiin eeljiig onoog oorchilno
    
        if ( diceNumber !== 1 ){
            roundScore += diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            document.getElementById('current-' + activePlayer).textContent = 0;
            activePlayer === 0 ? ( activePlayer = 1 ) : ( activePlayer = 0 );
            document.querySelector('.player-0-panel').classList.toggle("active");
            document.querySelector('.player-1-panel').classList.toggle("active");
            roundScore = 0;
            diceDom.style.display = "none";

        }

    });

    document.querySelector(".btn-hold").addEventListener("click", function(){
        scores[ activePlayer ] += roundScore;
        
        document.getElementById('score-' + activePlayer).textContent = scores[ activePlayer];
        if ( scores [ activePlayer ] >= 27 ) {
            isItOver = true;
            document.getElementById("score-" + activePlayer).textContent = scores[ activePlayer];
            document.querySelector(".player-"+ activePlayer + "-panel" ).classList.add('winner');
            document.getElementById("name-" + activePlayer).textContent = 'WINNER!!!';
            alert('game over! press newgame');
            document.querySelector('.player-0-panel').classList.remove("active");
            document.querySelector('.player-1-panel').classList.remove("active");
            diceDom.style.display = "none";

        } else {
            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;
            activePlayer === 0 ? ( activePlayer = 1 ) : ( activePlayer = 0 );
            document.querySelector('.player-0-panel').classList.toggle("active");
            document.querySelector('.player-1-panel').classList.toggle("active");
            diceDom.style.display = "none";
        }
        
    });

    
}





