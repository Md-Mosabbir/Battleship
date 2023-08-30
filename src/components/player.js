function Player(name, enemyGameboard, enemyShips, state) {
  const missedArray = []

  const randomMovesStorage = []

  function gameOver() {
    enemyGameboard.trackShips(enemyShips)
  }
  function attack(x, y) {
    return enemyGameboard.recieveAttack(enemyShips, x, y, missedArray)
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
    return randomMovesStorage
  }
  function getMissed() {
    return missedArray
  }
  function checkAttacks() {
    const array = [...randomMovesStorage]
    const hits = array.filter((randomMove) => {
      const [x, y] = randomMove
      return enemyShips.some((ship) =>
        ship.coordinates.some((coord) => coord[0] === x && coord[1] === y)
      )
    })

    return hits
  }

  function matchCoords(x, y) {
    return enemyGameboard.matchCoords(enemyShips, x, y)
  }

  return {
    name,
    attack,
    gameOver,
    autoMoves,
    getMissed,
    matchCoords,
    state,
    checkAttacks,
  }
}

export default Player
