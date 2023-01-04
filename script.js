//document.getElementById("b1").value = 'X'
document.getElementById("resetButton").value = 'Click to Start New Game'
document.getElementById("playerTwoSwitch").value = 'Player 2: Human'

let game = {
  b: [null, null, null, null, null, null, null, null, null, null],
  player: 1, //start at player 1
  winner: null,
  gameOver: false,
  computerPlayer: false,
  numberOfO: 0, // Number of circles placed
  playerOneWins: 0,
  playerTwoWins: 0,
};


function b1Click() {
  if (game.b[1] == null && game.gameOver == false) {

    if (game.player == 1) {
      document.getElementById("b1").value = 'X';
      game.b[1] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b1").value = 'O';
      game.player = 1;
      game.b[1] = 'O';
    }
  }
}

function b2Click() {
  if (game.b[2] == null && game.gameOver == false) {
    if (game.player == 1) {
      document.getElementById("b2").value = 'X';
      game.b[2] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b2").value = 'O';
      game.player = 1;
      game.b[2] = 'O';
    }
  }
}

function b3Click() {
  if (game.b[3] == null && game.gameOver == false) {
    if (game.player == 1) {
      document.getElementById("b3").value = 'X';
      game.b[3] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b3").value = 'O';
      game.player = 1;
      game.b[3] = 'O';

    }
  }
}

function b4Click() {
  if (game.b[4] == null && game.gameOver == false) {
    if (game.player == 1) {
      document.getElementById("b4").value = 'X';
      game.b[4] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b4").value = 'O';
      game.player = 1;
      game.b[4] = 'O';

    }
  }
}

function b5Click() {
  if (game.b[5] == null && game.gameOver == false) {
    if (game.player == 1) {
      document.getElementById("b5").value = 'X';
      game.b[5] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b5").value = 'O';
      game.player = 1;
      game.b[5] = 'O';
    }
  }
}

function b6Click() {
  if (game.b[6] == null && game.gameOver == false) {
    if (game.player == 1) {
      document.getElementById("b6").value = 'X';
      game.b[6] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b6").value = 'O';
      game.player = 1;
      game.b[6] = 'O';
    }
  }
}

function b7Click() {
  if (game.b[7] == null && game.gameOver == false) {
    if (game.player == 1) {
      document.getElementById("b7").value = 'X';
      game.b[7] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b7").value = 'O';
      game.player = 1;
      game.b[7] = 'O';
    }
  }
}

function b8Click() {
  if (game.b[8] == null && game.gameOver == false) {
    if (game.player == 1) {
      document.getElementById("b8").value = 'X';
      game.b[8] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b8").value = 'O';
      game.player = 1;
      game.b[8] = 'O';
    }
  }
}

function b9Click() {
  if (game.b[9] == null && game.gameOver == false) {
    if (game.player == 1) {
      document.getElementById("b9").value = 'X';
      game.b[9] = 'X';

      checkForWinner()

      if (game.computerPlayer == true && !game.gameOver) {
        computerMove = findComputerMove();
        makeComputerMove(computerMove);
      }
      else {
        game.player = 2;
      }
    }
    else {
      document.getElementById("b9").value = 'O';
      game.player = 1;
      game.b[9] = 'O';

    }
  }

}

function checkForWinner() {

  if(game.gameOver == true){
    return;
  }

  if (game.b[1] == game.b[2] && game.b[2] == game.b[3] && game.b[1] != null) {
    game.gameOver = true;
    if (game.b[1] == 'X') {
      game.winner = 1;
      game.playerOneWins++;
    }
    else if (game.b[1] == 'O') {
      game.winner = 2;
      game.playerTwoWins++;
    }
  }

  if (game.b[4] == game.b[5] && game.b[5] == game.b[6] && game.b[4] != null) {
    game.gameOver = true;
    if (game.b[4] == 'X') {
      game.winner = 1;
      game.playerOneWins++;
    }
    else if (game.b[4] == 'O') {
      game.winner = 2;
      game.playerTwoWins++;
    }
  }

  if (game.b[7] == game.b[8] && game.b[8] == game.b[9] && game.b[7] != null) {
    game.gameOver = true;
    if (game.b[7] == 'X') {
      game.winner = 1;
      game.playerOneWins++;
    }
    else if (game.b[7] == 'O') {
      game.winner = 2;
      game.playerTwoWins++;
    }
  }

  if (game.b[1] == game.b[4] && game.b[4] == game.b[7] && game.b[7] != null) {
    game.gameOver = true;
    if (game.b[7] == 'X') {
      game.winner = 1;
      game.playerOneWins++;
    }
    else if (game.b[7] == 'O') {
      game.winner = 2;
      game.playerTwoWins++;
    }
  }

  if (game.b[2] == game.b[5] && game.b[5] == game.b[8] && game.b[2] != null) {
    game.gameOver = true;
    if (game.b[2] == 'X') {
      game.winner = 1;
      game.playerOneWins++;
    }
    else if (game.b[2] == 'O') {
      game.winner = 2;
      game.playerTwoWins++;
    }
  }

  if (game.b[3] == game.b[6] && game.b[6] == game.b[9] && game.b[3] != null) {
    game.gameOver = true;
    if (game.b[3] == 'X') {
      game.winner = 1;
      game.playerOneWins++;
    }
    else if (game.b[3] == 'O') {
      game.winner = 2;
      game.playerTwoWins++;
    }
  }

  if (game.b[1] == game.b[5] && game.b[5] == game.b[9] && game.b[1] != null) {
    game.gameOver = true;
    if (game.b[1] == 'X') {
      game.winner = 1;
      game.playerOneWins++;
    }
    else if (game.b[1] == 'O') {
      game.winner = 2;
      game.playerTwoWins++;
    }
  }

  if (game.b[3] == game.b[5] && game.b[5] == game.b[7] && game.b[3] != null) {
    game.gameOver = true;
    if (game.b[3] == 'X') {
      game.winner = 1;
      game.playerOneWins++;
    }
    else if (game.b[3] == 'O') {
      game.winner = 2;
      game.playerTwoWins++;
    }
  }

  console.log(game.playerOneWins);
  console.log(game.playerTwoWins);

  if (game.gameOver == true) {
    //console.log('Player ' + game.winner + ' won the game!');
    document.getElementById("win_text").innerHTML = "Winner: Player " + game.winner;
    document.getElementById("scoreboard").innerHTML = "Player 1: " + game.playerOneWins + " | Player 2: " + game.playerTwoWins;
  }
}

function resetGame() {
  game.b[1] = null;
  game.b[2] = null;
  game.b[3] = null;
  game.b[4] = null;
  game.b[5] = null;
  game.b[6] = null;
  game.b[7] = null;
  game.b[8] = null;
  game.b[9] = null;
  document.getElementById("b1").value = '';
  document.getElementById("b2").value = '';
  document.getElementById("b3").value = '';
  document.getElementById("b4").value = '';
  document.getElementById("b5").value = '';
  document.getElementById("b6").value = '';
  document.getElementById("b7").value = '';
  document.getElementById("b8").value = '';
  document.getElementById("b9").value = '';
  game.player = 1;
  game.winner = null;
  game.gameOver = false;
  game.numberOfO = 0;
  document.getElementById("win_text").innerHTML = "Winner: ";
}

function makeComputerMove(m) {
  game.b[m] = 'O';
  setTimeout(updateButton, 500, m);
}

function updateButton(m) {
  document.getElementById("b" + m).value = 'O';
}

function findComputerMove() {

  if(game.numberOfO >= 4){
    return;
  }

  let m = Math.floor((Math.random() * 9) + 1);

  while(game.b[m] != null){
    console.log(m);
    m = Math.floor((Math.random() * 9) + 1);
  }

  game.numberOfO++;
  return m;

}

function switchPlayerTwo(){

  game.computerPlayer = !game.computerPlayer;

  if(game.computerPlayer == true){
    document.getElementById("playerTwoSwitch").value = 'Player 2: Computer';
  } else{
    document.getElementById("playerTwoSwitch").value = 'Player 2: Human';
  }

}