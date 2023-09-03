function displayShips(ships, board, appearance = 1) {
  const shipSet = [
    [
      '../src/assets/images/shadow-shade/Aircraft-Carrier.png',
      '../src/assets/images/shadow-shade/Battleship.png',
      '../src/assets/images/shadow-shade/Submarine-1.png',
      '../src/assets/images/shadow-shade/Submarine-2.png',
      '../src/assets/images/shadow-shade/Destroyer.png',
    ],
    [
      '../src/assets/images/colourful-shade/Aircraft-Carrier.png',
      '../src/assets/images/colourful-shade/Battleship.png',
      '../src/assets/images/colourful-shade/Submarine-1.png',
      '../src/assets/images/colourful-shade/Submarine-2.png',
      '../src/assets/images/colourful-shade/Destroyer.png',
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