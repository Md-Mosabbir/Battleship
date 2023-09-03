import aircraftColour from '../assets/images/colourful-shade/Aircraft-Carrier.png'
import battleshipColour from '../assets/images/colourful-shade/Battleship.png'
import submarineColourOne from '../assets/images/colourful-shade/Submarine-1.png'
import submarineColourTwo from '../assets/images/colourful-shade/Submarine-2.png'
import destroyerColour from '../assets/images/colourful-shade/Destroyer.png'

import aircraftShadow from '../assets/images/shadow-shade/Aircraft-Carrier.png'
import battleshipShadow from '../assets/images/shadow-shade/Battleship.png'
import submarineShadowOne from '../assets/images/shadow-shade/Submarine-1.png'
import submarineShadowTwo from '../assets/images/shadow-shade/Submarine-2.png'
import destroyerShadow from '../assets/images/shadow-shade/Destroyer.png'

function displayShips(ships, board, appearance = 0) {
  const shipSet = [
    [
      aircraftColour,
      battleshipColour,
      submarineColourOne,
      submarineColourTwo,
      destroyerColour,
    ],
    [
      aircraftShadow,
      battleshipShadow,
      submarineShadowOne,
      submarineShadowTwo,
      destroyerShadow,
    ],
  ]

  const playerDiv = document.getElementById(board)

  const shipDivs = playerDiv.querySelectorAll('.ship')
  shipDivs.forEach((shipDiv) => {
    shipDiv.remove()
  })

  ships.forEach((ship, index) => {
    const shipDiv = document.createElement('div')
    shipDiv.id = `${ship.name}`
    shipDiv.style.border = '2px solid rgba(0, 0, 0, 0.41)'
    shipDiv.style.display = 'flex'
    shipDiv.style.justifyContent = 'center'
    shipDiv.style.alignItems = 'center'

    const image = document.createElement('img')

    image.style.transform = 'scaleX(-1) '
    image.src = `${shipSet[appearance][index]}`
    image.style.pointerEvents = 'none'
    shipDiv.appendChild(image)

    // Add a data attribute with the index of the ship
    shipDiv.setAttribute('data-ship-index', index)
    shipDiv.setAttribute('draggable', 'true')
    shipDiv.classList.add('ship')
    shipDiv.style.position = 'absolute'

    const rootStyles = getComputedStyle(document.documentElement)
    const cellSize = rootStyles.getPropertyValue('--cell-size')
    const size = parseInt(cellSize, 10)

    // Assuming cellSize is obtained correctly as a string like "40px"
    // and it represents the size in pixels

    shipDiv.style.left = `${ship.coordinates[0][0] * (size + 2)}px`
    shipDiv.style.bottom = `${ship.coordinates[0][1] * (size + 2)}px`

    if (ship.orientation === 'vertical') {
      image.style.width = `${ship.lengthShips * (size - 10)}px`
      image.style.height = `${size}`

      image.style.transform = 'rotate(90deg) scaleY(-1)'
      // image.style.transform = 'scaleX(-1)'

      shipDiv.style.width = `${cellSize}`
      shipDiv.style.height = `${ship.lengthShips * (size + 2) - 2}px`
    } else {
      shipDiv.style.height = `${cellSize}`
      shipDiv.style.width = `${ship.lengthShips * (size + 2) - 2}px`

      image.style.width = `${ship.lengthShips * (size - 10)}px`
      image.style.height = `${size}`
    }

    playerDiv.appendChild(shipDiv)
  })
}

export default displayShips
