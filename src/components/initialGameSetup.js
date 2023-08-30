import createGrid from './grids'
import displayShips from './shipsUI'
import game from './match'

function initialGameSetup(
  playerShips,
  playerSea,

  computerShips,
  computerSea
) {
  let currentSet = 1
  createGrid('playerBoard')

  displayShips(playerShips, 'playerBoard-grid', currentSet)

  const playerBoard = document.getElementById('playerBoard-grid')
  const ships = document.querySelectorAll('.ship')

  playerBoard.addEventListener('click', (e) => {
    if (e.target.classList.contains('ship')) {
      const index = e.target.getAttribute('data-ship-index')
      const changeIt = playerSea.assignOrientation(playerShips, index)
      displayShips(changeIt, 'playerBoard-grid', currentSet)
      playerShips = changeIt
    }
  })
  let draggedShip = null

  playerBoard.addEventListener('dragover', (e) => {
    e.preventDefault() // Prevent the default behavior that disallows dropping
  })

  ships.forEach((ship) => {
    ship.addEventListener('click', (e) => {
      if (e.target.classList.contains('ship')) {
        const index = e.target.getAttribute('data-ship-index')
        const changeIt = playerSea.assignOrientation(playerShips, index)
        displayShips(changeIt, 'playerBoard-grid', currentSet)
        playerShips = changeIt
      }
    })
  })

  playerBoard.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('ship')) {
      draggedShip = e.target
    }
  })

  playerBoard.addEventListener('drop', (e) => {
    if (draggedShip) {
      const shipIndex = draggedShip.getAttribute('data-ship-index')
      const offsetX = e.clientX - playerBoard.getBoundingClientRect().left
      const offsetY = e.clientY - playerBoard.getBoundingClientRect().top
      // Calculate grid coordinates based on offsetX and offsetY
      const cellWidth = 62 // Assuming each cell is 62x62 including the gap
      const cellHeight = 62 // Assuming each cell is 62x62 including the gap

      // Adjusting for the gap and calculate the grid coordinates
      const x = Math.floor((offsetX + 1) / cellWidth) // Adding 1 to account for the gap

      // Reverse the y calculation to ensure it starts from the bottom
      const y = Math.floor(
        (playerBoard.clientHeight - offsetY + 1) / cellHeight
      )
      // Assign the new coordinates to the ship
      const updatedShips = playerSea.assignCoordinates(
        playerShips,
        shipIndex,
        x,
        y
      )
      displayShips(updatedShips, 'playerBoard-grid', currentSet)
      playerShips = updatedShips
      // Clear the draggedShip reference
      draggedShip = null
    }
  })

  const randomButton = document.getElementById('randomizer')

  // Initialize random ship positions and display them
  randomButton.addEventListener('click', () => {
    // Generate new random ship positions and display them
    const newRandom = playerSea.assignRandomCoordinates(playerShips)
    displayShips(newRandom, 'playerBoard-grid', currentSet)

    // Update the 'random' variable to the new positions
    playerShips = newRandom
  })

  const appearance = document.getElementById('appearence')
  appearance.addEventListener('click', () => {
    if (currentSet === 1) {
      currentSet = 0
      displayShips(playerShips, 'playerBoard-grid', currentSet)
    } else if (currentSet === 0) {
      currentSet = 1
      displayShips(playerShips, 'playerBoard-grid', currentSet)
    }
  })

  const startButton = document.getElementById('start')

  startButton.addEventListener('click', () => {
    const playerOne = document.getElementById('Player-One')
    const playerTwo = document.getElementById('Player-Two')
    if (playerOne.value !== '' && playerTwo.value !== '') {
      const nameOne = playerOne.value
      const nameTwo = playerTwo.value
      const player = document.getElementById('playerBoard')
      const enemy = document.getElementById('enemyBoard')
      const buttons = document.getElementById('game-function')
      const nav = document.querySelector('nav')

      player.textContent = ''
      enemy.textContent = ''
      buttons.textContent = ''
      nav.textContent = ''

      game(
        nameOne,
        playerShips,
        playerSea,
        currentSet,
        nameTwo,
        computerShips,
        computerSea
      )
    }
  })
}

export default initialGameSetup
