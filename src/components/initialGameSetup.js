import createGrid from './grids'
import displayShips from './shipsUI'

function initialGameSetup(random, heroBoard, heroShips) {
  let currentSet = 1
  createGrid('playerBoard')
  createGrid('enemyBoard')
  displayShips(random, 'playerBoard-grid', currentSet)

  const playerBoard = document.getElementById('playerBoard-grid')
  const ships = document.querySelectorAll('.ship')

  playerBoard.addEventListener('click', (e) => {
    if (e.target.classList.contains('ship')) {
      const index = e.target.getAttribute('data-ship-index')
      const changeIt = heroBoard.assignOrientation(random, index)
      displayShips(changeIt, 'playerBoard-grid', currentSet)
      random = changeIt
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
        const changeIt = heroBoard.assignOrientation(random, index)
        displayShips(changeIt, 'playerBoard-grid', currentSet)
        random = changeIt
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
      const updatedShips = heroBoard.assignCoordinates(random, shipIndex, x, y)
      displayShips(updatedShips, 'playerBoard-grid', currentSet)
      random = updatedShips
      // Clear the draggedShip reference
      draggedShip = null
    }
  })

  const randomButton = document.getElementById('randomizer')

  // Initialize random ship positions and display them
  randomButton.addEventListener('click', () => {
    // Generate new random ship positions and display them
    const newRandom = heroBoard.assignRandomCoordinates(heroShips)
    displayShips(newRandom, 'playerBoard-grid', currentSet)

    // Update the 'random' variable to the new positions
    random = newRandom
  })

  const appearance = document.getElementById('appearence')
  appearance.addEventListener('click', () => {
    if (currentSet === 1) {
      currentSet = 0
      displayShips(random, 'playerBoard-grid', currentSet)
    } else if (currentSet === 0) {
      currentSet = 1
      displayShips(random, 'playerBoard-grid', currentSet)
    }
  })

  const startButton = document.getElementById('start')

  startButton.addEventListener('click', () => {
    const playerOne = document.getElementById('Player-One')
    const playerTwo = document.getElementById('Player-Two')
    if (playerOne.value !== '' && playerTwo.value !== '') {
      const player = document.getElementById('playerBoard')
      const enemy = document.getElementById('enemyBoard')
      const buttons = document.getElementById('game-function')
      const nav = document.querySelector('nav')
      player.textContent = ''
      enemy.textContent = ''
      buttons.textContent = ''
      nav.textContent = ''
    }
  })
}

export default initialGameSetup
