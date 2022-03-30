const boardElements = Array.from(document.querySelectorAll("#board div"));
const currentPlayer = document.getElementById("current-player");
const winMessageElement = document.getElementById("win-message");
const winMessageTextElement = document.getElementById("text-win-message");
const btnRestart = document.getElementById("btn-restart");
const X_CLASS = "x-turn";
const O_CLASS = "o-turn";
const WINNING_COMB = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let circleTurn;

startGame();

btnRestart.addEventListener("click", startGame);

// Func para iniciar juego
function startGame() {
  boardElements.forEach((cell) => {
    // Eliminar info cuando se de al boton reiniciar juego
    cell.classList.remove(X_CLASS);
    cell.classList.remove(O_CLASS);
    // Agregar escuchador a cada celda
    cell.addEventListener("click", handleTurn, { once: true });
  });

  // Eliminar clase show cuando se le de al boton reiniciar juego
  winMessageElement.classList.remove("show");
}

// Func para manejar el click sobre dicha celda
function handleTurn(e) {
  const cell = e.target;
  const currentClass = circleTurn ? O_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWinner(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    changeTurn();
  }
}

// Func para manejar la finalización del juego
function endGame(draw) {
  if (draw) {
    winMessageTextElement.innerText = "Berabere";
  } else {
    winMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Kazandı`;
  }
  winMessageElement.classList.add("show");
}

// Func para manejar un empate
function isDraw() {
  return [...boardElements].every((cell) => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
}

// Func para manejar el marcado de casilla
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

// Func para cambiar turno
function changeTurn() {
  circleTurn = !circleTurn;

  // Mostrar jugador actual con color correspondiente
  if (!circleTurn) {
    currentPlayer.textContent = "X";
    currentPlayer.classList.remove(O_CLASS);
    currentPlayer.classList.add(X_CLASS);
  } else {
    currentPlayer.textContent = "O";
    currentPlayer.classList.add(O_CLASS);
  }
}

// Func para comprobar todas las combinaciones ganadoras
function checkWinner(currentClass) {
  return WINNING_COMB.some((combination) => {
    return combination.every((index) => {
      return boardElements[index].classList.contains(currentClass);
    });
  });
}