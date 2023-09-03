import createGrid from './grids'
import displayShips from './shipsUI'
import Player from './player'
import gameOver from './gameOver'

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

  function createName() {
    const boardContainer = document.querySelector('.board-container')
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('name-container')
    const firstPlayerNameDiv = document.createElement('div')
    const firstPlayerName = document.createElement('h2')
    firstPlayerName.textContent = `${player.name}`
    firstPlayerName.classList.add('player-one-name')

    const secondPlayerNameDiv = document.createElement('div')
    const secondPlayerName = document.createElement('h2')
    secondPlayerName.textContent = `${computer.name}`
    secondPlayerName.classList.add('player-two-name')

    firstPlayerNameDiv.appendChild(firstPlayerName)
    secondPlayerNameDiv.appendChild(secondPlayerName)

    nameDiv.appendChild(firstPlayerNameDiv)
    nameDiv.appendChild(secondPlayerNameDiv)

    boardContainer.appendChild(nameDiv)
  }
  createName()

  createGrid('playerBoard')
  createGrid('enemyBoard')

  const updateShipDisplay = () => {
    if (window.innerWidth <= 1150) {
      displayShips(playerShips, 'playerBoard-grid', currentSet)
    } else if (window.innerWidth <= 750) {
      displayShips(playerShips, 'playerBoard-grid', currentSet)
    } else if (window.innerWidth <= 400) {
      displayShips(playerShips, 'playerBoard-grid', currentSet)
    } else {
      // Default state or larger screens
      displayShips(playerShips, 'playerBoard-grid', currentSet)
    }
  }

  // Add a window resize event listener to trigger the update
  window.addEventListener('resize', updateShipDisplay)

  // Initial ship display
  updateShipDisplay()

  const enemyBoardCell = document.querySelectorAll('.enemyBoard-cell')
  const playerBoardCell = document.querySelectorAll('.playerBoard-cell')

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
      one.attack(x, y)

      displayComputer(e, x, y)
      gameOver(player, computer)

      enemyBoardCell.forEach((cell) => {
        cell.style.pointerEvents = 'none'
      })
      setTimeout(() => {
        two.autoMoves()

        // Todo: displayAttack
        displayPlayer()
        gameOver(player, computer)

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
