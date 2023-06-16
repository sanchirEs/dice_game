

var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

document.getElementById('score-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0; 



var diceDom = document.querySelector(".dice");
diceDom.style.display = "none"; 

document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor( Math.random() * 6 ) + 1;
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
      
      roundScore = 0;
      document.getElementById("current-" + activePlayer).textContent = 0;
      activePlayer === 0 ? ( activePlayer = 1 ) : ( activePlayer = 0 );
      document.querySelector('.player-0-panel').classList.toggle("active");
      document.querySelector('.player-1-panel').classList.toggle("active");
      diceDom.style.display = "none";
});

document.querySelector(".btn-new").addEventListener("click", function(){
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
})