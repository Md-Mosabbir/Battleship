function Player(name, enemyGameboard, enemyShips, state) {
  let storeEnemy = enemyShips
  const missedArray = []

  const randomMovesStorage = []

  function gameOver() {
    return enemyGameboard.trackShips(storeEnemy)
  }
  function attack(x, y) {
    const attacked = enemyGameboard.recieveAttack(storeEnemy, x, y, missedArray)
    storeEnemy = attacked
  }

  // AI method

  function randomMoves() {
    let x
    let y
    let isValid

    do {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)

      // Check if the generated coordinates already exist in randomMovesStorage
      // eslint-disable-next-line no-loop-func
      isValid = !randomMovesStorage.some(
        (coord) => coord[0] === x && coord[1] === y
      )
    } while (!isValid)

    // Store the generated coordinates in randomMovesStorage
    randomMovesStorage.push([x, y])

    return [x, y]
  }

  function autoMoves() {
    const [x, y] = randomMoves()

    const setAttack = attack(x, y)
    return setAttack
  }
  function getMissed() {
    return missedArray
  }
  function checkAttacks() {
    const array = [...randomMovesStorage]
    const hits = array.filter((randomMove) => {
      const [x, y] = randomMove
      return storeEnemy.some((ship) =>
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
