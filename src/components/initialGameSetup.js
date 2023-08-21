import createGrid from './grids'
import displayShips from './shipsUI'

function initialGameSetup(random, heroBoard, heroShips) {
  createGrid('playerBoard')
  createGrid('enemyBoard')
  displayShips(random, 'playerBoard-grid')

  const playerBoard = document.getElementById('playerBoard-grid')
  const ships = document.querySelectorAll('.ship')

  playerBoard.addEventListener('click', (e) => {
    if (e.target.classList.contains('ship')) {
      const index = e.target.getAttribute('data-ship-index')
      const changeIt = heroBoard.assignOrientation(random, index)
      displayShips(changeIt, 'playerBoard-grid')
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
        displayShips(changeIt, 'playerBoard-grid')
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
      displayShips(updatedShips, 'playerBoard-grid')
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
    displayShips(newRandom, 'playerBoard-grid')

    // Update the 'random' variable to the new positions
    random = newRandom
  })
}

export default initialGameSetup
