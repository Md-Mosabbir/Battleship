function Player(name, gameboard, enemyGameboard, state) {
  const missedArray = []

  const randomMovesStorage = []

  function gameOver() {
    enemyGameboard.trackShips(gameboard)
  }
  function attack(x, y) {
    enemyGameboard.recieveAttack(gameboard, x, y, missedArray)
  }
  function assign(index, x, y) {
    gameboard.assignCoordinates(gameboard, index, x, y)
  }
  function randomCoordiantes() {
    gameboard.assignRandomCoordinates(gameboard)
  }

  // AI method

  function randomMoves() {
    let x
    let y
    let isValid

    do {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)

      // eslint-disable-next-line arrow-body-style, no-loop-func
      isValid = randomMovesStorage.some((ship) => {
        // eslint-disable-next-line no-unused-expressions
        ship[0] === x && ship[1] === y
      })
    } while (isValid)

    return [x, y]
  }

  function autoMoves() {
    const [x, y] = randomMoves()
    attack(x, y)
    randomMovesStorage.push([x, y])
  }

  return {
    name,
    attack,
    assign,
    gameOver,
    autoMoves,
    randomCoordiantes,
  }
}

export default Player
