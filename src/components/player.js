function Player(name, gameboard, state) {
  let currentPlayer = state
  const missedArray = []

  const randomMovesStorage = []
  const shipsCreated = gameboard.createShips()

  function gameOver() {
    if (gameboard.trackShips(shipsCreated)) {
      return true
    }
  }
  function attack(x, y) {
    currentPlayer = !currentPlayer
    gameboard.recieveAttack(shipsCreated, x, y, missedArray)
  }
  function assignShips(index, x, y) {
    gameboard.assignCoordinates(shipsCreated, index, x, y)
  }

  // AI method

  function randomMoves() {
    let x
    let y
    let isValid

    do {
      x = Math.floor(Math.random() * 11)
      y = Math.floor(Math.random() * 11)

      // eslint-disable-next-line arrow-body-style, no-loop-func
      isValid = !randomMovesStorage.some((ship) => {
        ship[0] === x && ship[1] === y
      })
    } while (!isValid)

    return [x, y]
  }

  function automatedRandomMoves() {
    const [x, y] = randomMoves()
    attack(x, y)
    randomMovesStorage.push([x, y])
  }

  return {
    name,
    attack,
    assignShips,
    gameOver,
    automatedRandomMoves,
  }
}

export default Player
