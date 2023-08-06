import './style.css'
import Gameboard from './components/gameboard'
import createGrid from './components/grids'

createGrid('playerBoard')
createGrid('enemyBoard')

const exGameboard = Gameboard()

let testShips = exGameboard.createShips()
// testShips = exGameboard.assignRandomCoordinates(testShips)

// testShips.forEach((ship) => {
//   //* Create box based on their length
//   const shipBlock = document.createElement('div')
//   shipBlock.classList.add('ship')
//   shipBlock.id = `${ship.name}`

//   shipBlock.style.width = `${ship.lengthShips * 62}px`
//   shipBlock.style.height = '60px'
//   shipBlock.style.backgroundColor = 'beige'
//   shipBlock.style.position = 'absolute'
//   shipBlock.style.left = `${ship.coordinates[0][0] * 62}px`
//   shipBlock.style.bottom = `${ship.coordinates[0][1] * 62}px`
//   shipBlock.style.transformOrigin = '60px -2px'
//   if (ship.orientation === 'vertical') {
//     shipBlock.style.transform = 'rotate(90deg)'
//   }
//   shipBlock.style.backgroundSize = 'cover'
//   document.querySelector('.grid').appendChild(shipBlock)
// })
console.log(testShips)
