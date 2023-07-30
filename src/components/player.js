function Player(name, gameboard, state) {
  let currentPlayer = state
  const missedArray = []
  // const randomCoorStorage = []
  // const randomMovesStorage = []
  const shipsCreated = gameboard.createShips()

  function gameOver() {
    if (gameboard.trackShips(shipsCreated)) {
      return true
    }
  }
  function attack(x, y) {
    gameboard.recieveAttack(shipsCreated, x, y, missedArray)
  }
  function assignShips(index, x, y) {
    gameboard.assignCoordinates(shipsCreated, index, x, y)
  }

  function switchTurns() {
    currentPlayer = !currentPlayer
  }
  // AI method
  // function randomMoves() {}

  return { name, switchTurns, attack, assignShips, gameOver }
}

export default Player
