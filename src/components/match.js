import createGrid from './grids'
import displayShips from './shipsUI'
import Player from './player'

function game(
  playerName,
  playerShips,
  playerSea,
  currentSet,
  computerName,
  computerShips,
  computerSea
) {
  const player = Player(playerName, computerSea, computerShips, true)
  const computer = Player(computerName, playerSea, playerShips, false)

  createGrid('playerBoard')
  createGrid('enemyBoard')

  displayShips(playerShips, 'playerBoard-grid', currentSet)

  const enemyBoardCell = document.querySelectorAll('.enemyBoard-cell')
  const playerBoardCell = document.querySelectorAll('.playerBoard-cell')
  let storePlayerShips

  function displayComputer(e, x, y) {
    const cell = e.target

    if (player.matchCoords(x, y) === true) {
      cell.style.backgroundColor = 'red'
    } else {
      cell.style.backgroundColor = 'green'
    }
  }

  function displayPlayer() {
    const attacks = computer.checkAttacks()
    const missed = computer.getMissed()

    playerBoardCell.forEach((cell) => {
      const x = parseInt(cell.dataset.x, 10)
      const y = parseInt(cell.dataset.y, 10)

      // Check if the cell's coordinates are in the attacks array
      if (
        attacks.some(([attackX, attackY]) => attackX === x && attackY === y)
      ) {
        cell.style.backgroundColor = 'red'
      }

      // Check if the cell's coordinates are in the missed array
      if (missed.some(([missedX, missedY]) => missedX === x && missedY === y)) {
        cell.style.backgroundColor = 'green'
      }
    })
  }

  function turn(e, one, x, y, two) {
    //* When I click the func will make sure IS the player turn true THEN

    if (one.state === true) {
      const attack = one.attack(x, y)
      storePlayerShips = attack
      displayComputer(e, x, y)
      enemyBoardCell.forEach((cell) => {
        cell.style.pointerEvents = 'none'
      })
      setTimeout(() => {
        two.autoMoves()
        // Todo: displayAttack
        displayPlayer()
        enemyBoardCell.forEach((cell) => {
          cell.style.pointerEvents = 'auto'
        })
      }, 700)
    }

    //* Attack then AI will attack then turn return to as it is
  }

  enemyBoardCell.forEach((cell) => {
    cell.addEventListener(
      'click',
      (e) => {
        const x = parseInt(e.target.dataset.x, 10)
        const y = parseInt(e.target.dataset.y, 10)
        turn(e, player, x, y, computer)
      },
      { once: true }
    )
  })
}

export default game
