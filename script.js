document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".cell");
    const resultScreen = document.getElementById("result-screen");
    const resultMessage = document.getElementById("result-message");
    const newGameButton = document.getElementById("new-game-button");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    cells.forEach(cell => {
        cell.addEventListener("click", () => handleCellClick(cell));
    });

    newGameButton.addEventListener("click", resetGame);

    function handleCellClick(cell) {
        const cellIndex = parseInt(cell.id) - 1;

        if (gameBoard[cellIndex] === "" && !checkWinner()) {
            gameBoard[cellIndex] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.style.pointerEvents = "none";

            if (checkWinner()) {
                displayResult(`Player ${currentPlayer} wins!`);
            } else if (gameBoard.every(cell => cell !== "")) {
                displayResult("It's a tie!");
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    }

   function displayResult(message) {
    resultMessage.textContent = message;
    resultScreen.classList.add("visible"); // Add this line to make the result screen visible
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.pointerEvents = "auto";
    });

    resultScreen.classList.remove("visible"); // Add this line to hide the result screen
    currentPlayer = "X";
}


});
