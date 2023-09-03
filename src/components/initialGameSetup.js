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

  const playerBoard = document.getElementById('playerBoard-grid')

  const buttons = document.querySelector('.buttons')
  const randomButton = document.createElement('button')
  randomButton.id = 'randomizer'
  randomButton.textContent = 'Randomise'
  const appearance = document.createElement('button')
  appearance.id = 'appearance'
  appearance.textContent = 'Appearance'
  const startButton = document.createElement('button')
  startButton.id = 'start'
  startButton.textContent = 'Start'
  const playerOneInputContainer = document.getElementById('Player1')
  const playerTwoInputContainer = document.getElementById('Player2')
  const playerOneInput = document.createElement('input')
  playerOneInput.id = 'Player-One'
  playerOneInput.placeholder = 'Player-One'

  const playerTwoInput = document.createElement('input')
  playerTwoInput.id = 'Player-Two'
  playerTwoInput.placeholder = 'Player-Two'

  // Initialize random ship positions and display them
  randomButton.addEventListener('click', () => {
    // Generate new random ship positions and display them
    const newRandom = playerSea.assignRandomCoordinates(playerShips)
    displayShips(newRandom, 'playerBoard-grid', currentSet)

    // Update the 'random' variable to the new positions
    playerShips = newRandom
  })

  appearance.addEventListener('click', () => {
    if (currentSet === 1) {
      currentSet = 0
      displayShips(playerShips, 'playerBoard-grid', currentSet)
    } else if (currentSet === 0) {
      currentSet = 1
      displayShips(playerShips, 'playerBoard-grid', currentSet)
    }
  })

  startButton.addEventListener('click', () => {
    const playerOne = document.getElementById('Player-One')
    const playerTwo = document.getElementById('Player-Two')
    if (playerOne.value !== '' && playerTwo.value !== '') {
      const nameOne = playerOne.value
      const nameTwo = playerTwo.value
      const player = document.getElementById('playerBoard')
      const enemy = document.getElementById('enemyBoard')

      const nav = document.querySelector('nav')
      const main = document.querySelector('main')

      player.textContent = ''
      enemy.textContent = ''
      main.classList.add('game-on')
      main.classList.add('span-width')
      nav.remove()

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
  playerOneInputContainer.appendChild(playerOneInput)
  playerTwoInputContainer.appendChild(playerTwoInput)
  buttons.appendChild(startButton)
  buttons.appendChild(appearance)
  buttons.appendChild(randomButton)

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

  playerBoard.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('ship')) {
      draggedShip = e.target
    }
  })

  playerBoard.addEventListener('drop', (e) => {
    if (draggedShip) {
      const rootStyles = getComputedStyle(document.documentElement)
      const cellSize = rootStyles.getPropertyValue('--cell-size')
      const size = parseInt(cellSize, 10)
      const shipIndex = draggedShip.getAttribute('data-ship-index')
      const offsetX = e.clientX - playerBoard.getBoundingClientRect().left
      const offsetY = e.clientY - playerBoard.getBoundingClientRect().top
      // Calculate grid coordinates based on offsetX and offsetY
      const cellWidth = size
      const cellHeight = size

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
}

export default initialGameSetup
