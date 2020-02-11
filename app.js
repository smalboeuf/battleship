let player1;
let player2;


const createPlayerBoards = function () {
  
  let baseBoard = [];

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      baseBoard[x][y] = 'o';
    }
  }

  let p1Board = baseBoard;
  let p2Board = baseBoard;

  

}

let player1Board = function() {

  let finalOutput = "";

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      finalOutput += p1Board[x][y];
    }
    finalOutput += "\n";
  }


  return finalOutput;
}

let player2Board = function() {

}



