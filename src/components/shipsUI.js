function displayShips(ships, board) {
  const playerDiv = document.getElementById(board)

  const shipDivs = playerDiv.querySelectorAll('.ship')
  shipDivs.forEach((shipDiv) => {
    shipDiv.remove()
  })

  ships.forEach((ship, index) => {
    const shipDiv = document.createElement('div')
    shipDiv.style.backgroundColor = '#000'

    // Add a data attribute with the index of the ship
    shipDiv.setAttribute('data-ship-index', index)
    shipDiv.classList.add('ship')
    shipDiv.style.position = 'absolute'

    shipDiv.style.left = `${ship.coordinates[0][0] * 62}px`
    shipDiv.style.bottom = `${ship.coordinates[0][1] * 62}px`

    if (ship.orientation === 'vertical') {
      shipDiv.style.width = '62px'
      shipDiv.style.height = `${ship.lengthShips * 62}px`
    } else {
      shipDiv.style.width = `${ship.lengthShips * 62}px`
      shipDiv.style.height = '62px'
    }

    playerDiv.appendChild(shipDiv)
  })
}

export default displayShips
