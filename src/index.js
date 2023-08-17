import './style.css'
import Gameboard from './components/gameboard'
import createGrid from './components/grids'
import displayShips from './components/shipsUI'
import Player from './components/player'

const heroBoard = Gameboard()
const heroShips = heroBoard.createShips()

const villanBoard = Gameboard()
const villanShips = villanBoard.createShips()

const hero = Player('Mosabbir', heroShips, villanShips, true)
const villan = Player('Mosarrat', villanShips, heroShips, false)

createGrid('playerBoard')
createGrid('enemyBoard')
const randomButton = document.getElementById('randomizer')

// Initialize random ship positions and display them
let random = heroBoard.assignRandomCoordinates(heroShips)
displayShips(random, 'playerBoard-grid')

randomButton.addEventListener('click', () => {
  // Generate new random ship positions and display them
  const newRandom = heroBoard.assignRandomCoordinates(heroShips)
  displayShips(newRandom, 'playerBoard-grid')

  // Update the 'random' variable to the new positions
  random = newRandom
})

const playerBoard = document.getElementById('playerBoard-grid')
playerBoard.addEventListener('dblclick', (e) => {
  // Check if the clicked element has the 'ship' class
  if (e.target.classList.contains('ship')) {
    const index = e.target.getAttribute('data-ship-index')
    const changeIt = heroBoard.assignOrientation(random, index)

    // Clear the player board and display the updated ships
    displayShips(changeIt, 'playerBoard-grid')

    // Update the 'random' variable to the new positions
    random = changeIt
  }
})
